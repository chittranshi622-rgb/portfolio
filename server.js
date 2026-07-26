import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL Connection Pool
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'portfolio_db'
});

// Test Database Connection and Create Table if not exists
db.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed: ', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');

    // Create contacts table automatically
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS contacts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    connection.query(createTableQuery, (tableErr) => {
        if (tableErr) throw tableErr;
        console.log('Contacts table checked/created successfully.');
    });
    
    connection.release();
});

// Root Route
app.get('/', (req, res) => {
    res.send('Portfolio Backend Server is running successfully with MySQL!');
});

// Contact Route - Save to MySQL
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ message: "Please fill in all fields." });
    }

    const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    
    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error saving message:', err);
            return res.status(500).json({ message: "Database error. Failed to save message." });
        }
        res.status(200).json({ message: "Message saved to database successfully!" });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});