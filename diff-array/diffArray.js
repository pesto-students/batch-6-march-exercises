
function diffArray(...args) {
  const firstArray = [...args[0]];
  const secondArray = [...args[1]];
  const resultDiff = [];
  for (let i = 0; i < firstArray.length; i += 1) {
    const indexInSecondArray = secondArray.indexOf(firstArray[i]);
    if (indexInSecondArray === -1) {
      resultDiff.push(firstArray[i]);
    } else {
      secondArray.splice(indexInSecondArray, 1);
    }
  }
  resultDiff.push(...secondArray);
  return resultDiff;
}

export {
  diffArray,
};
