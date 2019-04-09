
function truthCheck(array, key) {
  return array.every(object => object[key]);
}

export {
  truthCheck,
};
