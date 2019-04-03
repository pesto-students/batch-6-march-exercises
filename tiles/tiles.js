
function tiles({ small, big, target }) {
  let fives = Math.floor(target / 5);
  fives = fives <= big ? fives : big;
  const reducedTarget = target - fives * 5;
  if (small >= reducedTarget) {
    return true;
  }
  return false;
}

export {
  tiles,
};
