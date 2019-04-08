
const calcLCM = (number1, number2) => {
  let lcm = number1;
  while (lcm % number2 !== 0) {
    lcm += number1;
  }
  return lcm;
};

function smallestCommons(range) {
  range.sort((a, b) => a - b);
  let lowerBound = range[0];
  const upperBound = range[1];

  let lcm = lowerBound;
  while (lowerBound < upperBound) {
    lcm = calcLCM(lcm, lowerBound + 1);
    lowerBound += 1;
  }

  return lcm;
}

export {
  smallestCommons,
};
