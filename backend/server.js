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
    database: process.env.DB_NAME || 'portfolio_db',
    connectTimeout: 5000
});

let isDbConnected = false;

// Test Database Connection and Create Table if not exists
db.getConnection((err, connection) => {
    if (err) {
        console.log('[Server] MySQL database not connected. Running backend in fallback mode.');
        return;
    }
    isDbConnected = true;
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
        if (tableErr) {
            console.log('[Server] Note: Could not auto-create contacts table (DB offline or restricted).');
        } else {
            console.log('Contacts table checked/created successfully.');
        }
    });
    
    connection.release();
});

// Root Route
app.get('/', (req, res) => {
    res.send('Portfolio Backend Server is running successfully!');
});

// Contact Route - Save to MySQL with fallback
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ message: "Please fill in all fields." });
    }

    if (!isDbConnected) {
        // Fallback response when DB is offline
        return res.status(200).json({ 
            message: "Message received successfully! (Backend running in fallback mode - DB offline)." 
        });
    }

    const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    
    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.log('[Server] Database query failed, returning fallback success response.');
            return res.status(200).json({ 
                message: "Message received successfully! (Fallback mode)." 
            });
        }
        res.status(200).json({ message: "Message saved to database successfully!" });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
