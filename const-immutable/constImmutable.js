
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  Object.defineProperty(account, 'password', {
    writable: false,
    enumerable: false,
    configurable: false,
  });
  try {
    account.password = 's3cret';
  } catch (e) {
    // const errorName = e.name;
  }

  return account.password;
}

export {
  constImmutable,
};
