
function ConsumableUsers() {
  const users = ['Alice', 'Bob'];

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      if (users.length <= 0) {
        return { done: true };
      }
      return {
        value: `user: ${users[0]}`,
        done: false,
      };
    },
  };
}

export {
  ConsumableUsers,
};
