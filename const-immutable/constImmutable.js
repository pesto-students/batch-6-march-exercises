
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  Object.freeze(account);
  if (!Object.isFrozen) {
    account.password = 's3cret';
  }
  return account.password;
}

export {
  constImmutable,
};
