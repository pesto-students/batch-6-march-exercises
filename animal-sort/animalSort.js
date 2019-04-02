
function animalSort(arr) {
  if(arr.length){
    var sorted = []
    sorted = arr.sort((a1,a2) => (a1.numberOfLegs > a2.numberOfLegs) ? 1: (a1.numberOfLegs === a2.numberOfLegs) ? -1:1)
    return sorted;
  }
  return [];
}

export {
  animalSort,
};
