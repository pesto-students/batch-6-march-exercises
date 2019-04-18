const { getProjects } = require('./src/database');

const express = require('express');

const app = express();

app.get('/projects', async (req, res) => {
  const projects = await getProjects();
  res.json(projects);
});

app.listen(3000, () => console.log('Server listening to port: 3000'));
