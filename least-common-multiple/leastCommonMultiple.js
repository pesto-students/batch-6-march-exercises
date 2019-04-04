
function leastCommonMultiple(...args) {
  const number1 = Math.abs(args[0]);
  const number2 = Math.abs(args[1]);
  if (number1 === 0 || number2 === 0) {
    return 0;
  }

  const smallerNumber = number1 < number2 ? number1 : number2;
  const biggerNumber = number1 > number2 ? number1 : number2;

  let lcm = biggerNumber;
  while (lcm % smallerNumber !== 0) {
    lcm += biggerNumber;
  }
  return lcm;
}

export {
  leastCommonMultiple,
};
