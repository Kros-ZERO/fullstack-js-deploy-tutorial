const express = require('express');
const app = express();

const host = 'localhost';

// Disable cors
const cors = require('cors');
app.use(cors({
  origin: `http://${host}:7102`
}));

const mysql = require('mysql2');
connection = mysql.createConnection({
  host: host,
  user: 'root',
  password: '',
  database: 'deploy',
});

// Test db connection
connection.connect((err) => console.log(err || 'Mysql connected'));

// Test api without db
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Test api with db
app.get('/visit', (req, res) => {
  connection.query('INSERT INTO visit(time) SELECT NOW()', ((_, data) => {
    res.json(data.insertId);
  }));
});

const port = 7101;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
