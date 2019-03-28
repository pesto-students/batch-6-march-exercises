function isTriangle(...args) {
  const [fisrtSide, secondSide, thirdSide] = args;
  const longestSide = Math.max(...args);
  return fisrtSide + secondSide + thirdSide - longestSide > longestSide;
}

export { isTriangle };
