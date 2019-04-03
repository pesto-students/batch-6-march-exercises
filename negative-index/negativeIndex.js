/* eslint-disable no-param-reassign */
function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Only arrays are supported');
  }
  const handler = {
    get(target, index) {
      if (index < 0) {
        index = target.length + parseInt(index, 10);
      }
      return target[index];
    },
    set(target, index, value) {
      index = Number(index);
      if (index < 0) {
        index = target.length + index;
      }
      target[index] = value;
    },
  };
  const proxy = new Proxy(array, handler);
  return proxy;
}
// const fixture = negativeIndex(['foo', 'bar', 'baz']);
// console.log(fixture.toString());
// fixture[0] = 0;
// console.log(fixture.toString());
export {
  negativeIndex,
};
