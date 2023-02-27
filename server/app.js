const express = require('express');
const app = express();
const path = require('path');

// APIs
app.use('/api/teams', require('./api/teams'));
app.use('/api/divisions', require('./api/divisions'));

app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/static', express.static(path.join(__dirname, '../static')));
app.use('/api/auth', require('./api/auth'));
app.use('/api/users', require('./api/users'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../static/index.html'))
);

module.exports = app;
