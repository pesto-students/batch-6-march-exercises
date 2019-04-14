function orbitalPeriod(array) {
  const GM = 398600.4418; // in km3s-2
  const earthRadius = 6367.4447; // in km
  return array.map((obj) => {
    const axisCube = (obj.avgAlt + earthRadius) ** 3;
    return {
      name: obj.name,
      orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(axisCube / GM)),
    };
  });
}

export { orbitalPeriod };
