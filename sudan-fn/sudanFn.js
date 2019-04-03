
function sundanFn({ n, x, y }) {
  if (n === 0) {
    return x + y;
  }
  if (y === 0 && n > 0) {
    return x;
  }
  const tempX = sundanFn({ n, x, y: y - 1 });
  return sundanFn({ n: n - 1, x: tempX, y: tempX + y });
}

export {
  sundanFn,
};
