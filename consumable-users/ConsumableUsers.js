
class ConsumableUsers {
  constructor() {
    this.users = ['Alice', 'Bob'];
    this.completed = false;
  }

  nextUser() {
    const user = this.users.shift();
    if (!user) {
      this.completed = true;
      return undefined;
    }
    return `user: ${user}`;
  }

  done() {
    return this.completed;
  }
}

export {
  ConsumableUsers,
};
