class ConsumableUsers {
  constructor() {
    this.users = ['Alice', 'Bob'];
    this.done = false;
  }

  nextUser() {
    const user = this.users.shift();
    if (!user) {
      this.done = true;
      return undefined;
    }
    return `user: ${user}`;
  }

  isDone() {
    return this.done;
  }
}

export { ConsumableUsers };
