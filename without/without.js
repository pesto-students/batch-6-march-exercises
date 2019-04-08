
function without(arr1, arr2) {
  const finalArray = [];
  const compare = ((e1, e2) => {
    if(e1 !== e2){
     finalArray.push(e2);
   }
  });
  arr2.forEach(e1 => arr1.forEach(e2 => compare(e1, e2)));
    return finalArray;
}

export {
  without,
};
