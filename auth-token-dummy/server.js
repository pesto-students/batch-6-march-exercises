const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const secret = 'mySecret';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const users = [];

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.token = this.generateToken();
  }

  generateToken() {
    const { username, password } = this;
    const token = jwt.sign({
      username,
      password,
    }, secret, { expiresIn: 60 * 60 });
    return token.toString();
  }
}

function verifyToken(req, res, next) {
  const token = req.header('x-auth');
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.send('Invalid Token');
    }
    req.token = decoded;
    return next();
  });
}

app.get('/', verifyToken, (req, res) => {
  const movies = ['godfather', 'godfather 2'];
  return res.send(JSON.stringify(movies));
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const newUser = new User(username, password);
  users.push(newUser);
  res.send(newUser.token);
});


app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
