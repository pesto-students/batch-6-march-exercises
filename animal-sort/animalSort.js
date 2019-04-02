
function animalSort(arr) {
  if(arr.length){
    var sortable = []
    return sortable = arr.sort((a1,a2) => (a1.numberOfLegs > a2.numberOfLegs) ? 1: -1)
  }
  return [];
}

export {
  animalSort,
};
