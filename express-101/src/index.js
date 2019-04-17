const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hey, I am server response');
});

app.get('/movie/:title', (req, res) => {
  const { title } = req.params;
  res.send(`My favorite movie is ${title}`);
});

app.listen(3000, () => console.log('Server listening on port: 3000'));

module.exports = app;
