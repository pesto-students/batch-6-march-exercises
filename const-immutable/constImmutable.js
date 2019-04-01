
function constImmutable() {
  const account = {
    username: 'pesto',
  };
  Object.defineProperty(account, 'password', {
    value: 'initialPassword',
    configurable: true,
    enumerable: true,
  });
  return account.password;
}

export {
  constImmutable,
};
