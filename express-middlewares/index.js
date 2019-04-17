const express = require('express');

const app = express();
const router = express.Router();

const headerMiddleware = value => (req, res, next) => {
  res.append('middleware-header', value);
  next();
};

const timeLoggerMiddleware = (req, res, next) => {
  console.log(`Request URL: ${req.originalUrl} , Time ${Date.now()}`);
  next();
};

app.get('/', (req, res) => {
  res.send('Hello');
});

router.get('/languages',
  timeLoggerMiddleware,
  headerMiddleware('languages'),
  (req, res) => {
    res.json([{
      id: 1,
      name: 'Javascript',
    }, {
      id: 2,
      name: 'Php',
    }, {
      id: 3,
      name: 'Python',
    }, {
      id: 4,
      name: 'C++',
    }, {
      id: 5,
      name: 'SQL',
    }]);
  });

app.get('/packages',
  timeLoggerMiddleware,
  headerMiddleware('packages'),
  (req, res) => {
    res.json([{
      id: 1,
      name: 'express',
    }, {
      id: 2,
      name: 'react',
    }, {
      id: 3,
      name: 'create-react-app',
    }, {
      id: 4,
      name: 'passport',
    }, {
      id: 5,
      name: 'nodemon',
    }]);
  });

app.use('/', router);

app.listen(3000, () => console.log('Server listening to port: 3000'));

module.exports = app;
