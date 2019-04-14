
function sumEvenArgs(...args) {
  const argsArr = [...args];
  const evenArgs = argsArr.filter(elm => elm % 2 === 0);
  return evenArgs.reduce((acc, elm) => acc + elm, 0);
}

export {
  sumEvenArgs,
};
