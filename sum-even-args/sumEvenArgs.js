
const sumEvenArgs= ((arr) =>{
  return arr.filter((i) => i%2 === 0).reduce((sum, ele) => sum + ele);
})

export {
  sumEvenArgs,
};
