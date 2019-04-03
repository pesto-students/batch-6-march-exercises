
function privateProps(myObj, privacyFilter) {
  return new Proxy(myObj, privacyFilter);
}

export {
  privateProps,
};
