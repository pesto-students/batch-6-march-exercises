
function bouncer(array) {
  return array.filter((value) => {
    return Boolean(value);
  });
}

export {
  bouncer,
};
