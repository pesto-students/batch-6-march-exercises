
function bouncer(array) {
  return array.filter((item) => {
    if (item) {
      return true;
    }
    return false;
  });
}

export {
  bouncer,
};
