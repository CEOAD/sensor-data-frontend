const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sensordata',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.get('/api/sensor-data', (req, res) => {
    db.query("SELECT * FROM sensordata WHERE Location = 'KFC S2-D' ORDER BY STR_TO_DATE(Time_Stamp, '%Y-%m-%d %H:%i:%s') DESC LIMIT 1", (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
