const express = require('express');
const middlewares = require('./middlewares');

const app = express();

const languages = ['Javascript', 'Ruby', 'C++', 'Java', 'Python'];
const packages = ['express', 'body-parser', 'react', 'chartjs', 'enquirer'];

app.get('/', (req, res) => res.status(200).send('Hello'));

app.get('/languages', middlewares, (req, res) => res.status(200).send(JSON.stringify(languages)));
app.get('/packages', middlewares, (req, res) => res.status(200).send(JSON.stringify(packages)));

module.exports = app;
