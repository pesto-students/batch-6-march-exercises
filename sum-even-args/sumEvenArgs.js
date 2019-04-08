
function sumEvenArgs(...args) {
  return args.reduce((sumOfEvenArgs, arg) => {
    const isArgEven = arg % 2 === 0;
    const increment = isArgEven ? arg : 0;
    return sumOfEvenArgs + increment;
  }, 0);
}

export {
  sumEvenArgs,
};
