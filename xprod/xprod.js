function xprod(arrayOne, arrayTwo) {
  const isEmptyArray = array => array.length === 0;
  if (isEmptyArray(arrayOne) || isEmptyArray(arrayTwo)) {
    return [];
  }
  return arrayOne
    .reduce((acc, arrayOneElement) => arrayTwo
      .map((arrayTwoElement) => {
        acc.concat([arrayOneElement, arrayTwoElement]); return acc;
      }), []);
}


export { xprod };
