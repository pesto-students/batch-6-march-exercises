
function animalSort(arr) {
  return arr.sort((el1, el2) => {
    const { name: name1, numberOfLegs: legs1 } = el1;
    const { name: name2, numberOfLegs: legs2 } = el2;
    if (legs1 - legs2 === 0) {
      return name1.localeCompare(name2);
    }
    return legs1 - legs2;
  });
}

export {
  animalSort,
};
