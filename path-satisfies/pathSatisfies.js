
function pathSatisfies(fn, path, obj) {
  const val = path.reduce((acc, cur) => acc[cur], obj);
  return fn(val);
}

export {
  pathSatisfies,
};
