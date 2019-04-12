

function User(username, password) {
  this.username = username;
  this.password = password;
}

User.prototype.checkPassword = function checkPassword(string) {
  return this.password === string;
};

export {
  User,
};
