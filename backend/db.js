import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Martandsql@03',
  database: 'hospital_management',
});

app.get('/', (req, res) => {
  return res.json('From backend');
});

// Endpoint for user registration
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  const sql = 'INSERT INTO register (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, password], (err, data) => {
    if (err) {
      console.error('Error:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.json(data);
  });
});

// Endpoint to get patients
app.get('/patients', (req, res) => {
  const sql = 'SELECT * FROM patients';
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    return res.json(data);
  });
});

// Endpoint to get appointments
app.get('/appointments', (req, res) => {
  const sql = 'SELECT * FROM appointments';
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    return res.json(data);
  });
});

// Endpoint to add patient
app.post('/patients', (req, res) => {
  const { name, age, gender, date, contact } = req.body;

  const sql = 'INSERT INTO appointments (name, age, gender, date, contact) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, age, gender, date, contact], (err, data) => {
    if (err) return res.status(500).json({ error: 'Internal server error' });
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log('Connected to server');
});
