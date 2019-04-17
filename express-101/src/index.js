const express = require('express');


const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hey, I am server response');
});

app.get('/movie/:title', (req, res) => {
  const { title } = req.params;
  res.status(200).send(`My favorite movie is ${title}`);
});

// 1) Create Routes

// 2) Start server on port 3000

module.exports = app;
