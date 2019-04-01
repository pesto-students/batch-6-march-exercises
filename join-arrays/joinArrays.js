
function joinArrays(...args) {
  const nestedArray = [...args];
  return nestedArray.reduce((partialResult, currentValue) => [...partialResult, ...currentValue]);
}

export {
  joinArrays,
};
