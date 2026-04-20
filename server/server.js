const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

const db = new sqlite3.Database('./health.db');
const SECRET = "urban_secret_2025";

// Initialize Tables
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT, role TEXT)`);
    db.run(`CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY, owner_id INTEGER, title TEXT, date TEXT, bp TEXT, glucose TEXT, hr TEXT, file TEXT)`);
    db.run(`CREATE TABLE IF NOT EXISTS shares (id INTEGER PRIMARY KEY, report_id INTEGER, viewer_id INTEGER)`);
});

const upload = multer({ storage: multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
})});

// Middleware
const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.user = decoded;
        next();
    });
};

// Routes
app.post('/register', (req, res) => {
    const { username, password, role } = req.body;
    db.run(`INSERT INTO users (username, password, role) VALUES (?, ?, ?)`, [username, password, role], (err) => {
        err ? res.status(400).send("User exists") : res.send("OK");
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.get(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password], (err, user) => {
        if (!user) return res.status(400).send("Invalid");
        const token = jwt.sign({ id: user.id, role: user.role, username: user.username }, SECRET);
        res.json({ token, role: user.role, username: user.username });
    });
});

app.post('/upload', auth, upload.single('file'), (req, res) => {
    const { title, date, bp, glucose, hr } = req.body;
    db.run(`INSERT INTO reports (owner_id, title, date, bp, glucose, hr, file) VALUES (?,?,?,?,?,?,?)`,
        [req.user.id, title, date, bp, glucose, hr, req.file.filename], () => res.send("Uploaded"));
});

app.get('/reports', auth, (req, res) => {
    const sql = req.user.role === 'Owner' 
        ? `SELECT * FROM reports WHERE owner_id = ?` 
        : `SELECT r.* FROM reports r JOIN shares s ON r.id = s.report_id WHERE s.viewer_id = ?`;
    db.all(sql, [req.user.id], (err, rows) => res.json(rows));
});

app.listen(5000, () => console.log("Server: 5000"));