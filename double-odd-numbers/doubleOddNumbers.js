
const doubleOddNumbers = ((arr) =>{
  return arr.filter((i) => i% 2 !== 0).map((i) =>  2*i)
})

export {
  doubleOddNumbers,
};
