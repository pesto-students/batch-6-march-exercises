const express = require('express');
const bodyParser = require('body-parser');
const projects = require('./routes/projects');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/projects', projects);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
