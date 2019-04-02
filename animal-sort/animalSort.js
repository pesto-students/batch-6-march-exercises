
function animalSort(array) {
  const animalComparable = (a, b) => a.numberOfLegs - b.numberOfLegs;
  return array.sort(animalComparable);
}

export {
  animalSort,
};
