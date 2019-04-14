function ConsumableUsers() {
  const users = ['Alice', 'Bob'];
  return {
    users,
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const val = this.users.shift();
      const isDone = val === undefined;
      return {
        value: val ? `user: ${val}` : val,
        done: isDone,
      };
    },
  };
}

export {
  ConsumableUsers,
};
