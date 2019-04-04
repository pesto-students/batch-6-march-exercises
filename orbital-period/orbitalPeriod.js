
const GM = 398600.4418; // in km3s-2
const earthRadius = 6367.4447; // in km

function orbitalPeriod(objects) {
  const calcSemiMajorAxis = alt => earthRadius + alt;
  const calcOrbitalPeriod = axis => Math.round((2 * Math.PI * Math.sqrt(((axis ** 3) / GM))));

  return objects.reduce((acc, obj) => {
    const semiMajorAxis = calcSemiMajorAxis(obj.avgAlt);
    const orbitalPeriodSecs = calcOrbitalPeriod(semiMajorAxis);
    return [...acc, { name: obj.name, orbitalPeriod: orbitalPeriodSecs }];
  }, []);
}

export {
  orbitalPeriod,
};
