function ConsumableUsers() {
  const users = new Map([[1, 'Alice'], [2, 'Bob']]);
  return {
    users,
    index: 1,
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const val = this.users.get(this.index);
      this.index += 1;
      const isDone = !this.users.has(this.index);
      return {
        value: `user: ${val}`,
        done: isDone,
      };
    },
  };
}

export {
  ConsumableUsers,
};
