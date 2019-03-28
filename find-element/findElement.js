
function findElement(arr) {
  var firstElement = arr.find((element)=>{
    return element % 2 === 0;
  });
  return firstElement;
}

export {
  findElement,
};
