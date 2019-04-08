
const squareNumbersArray = ((arr)=> {
  if(!arr.some(isANumber)){
    throw new Error('My custom error'); 
  }
});

export {
  squareNumbersArray,
};
