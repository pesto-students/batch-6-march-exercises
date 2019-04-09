
function orbitalPeriod(array) {
  const GM = 398600.4418; // in km3s-2
  const earthRadius = 6367.4447; // in km
  const twoPi = 2 * Math.PI;

  return array.map((object) => {
    const axis = object.avgAlt + earthRadius;
    const axisCube = axis ** 3;
    return {
      name: object.name,
      orbitalPeriod: Math.round(twoPi * Math.sqrt(axisCube / GM)),
    };
  });
}

export {
  orbitalPeriod,
};
