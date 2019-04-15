function animalSort(array) {
  const newArray = array;
  const checkNumberOfLegs = (el1, el2) => {
    if (el1.numberOfLegs > el2.numberOfLegs) {
      return 1;
    }
    if (el1.numberOfLegs < el2.numberOfLegs) {
      return -1;
    }
    return 0;
  };
  const checkName = (el1, el2) => {
    if (el1.name > el2.name) {
      return 1;
    }
    if (el1.name < el2.name) {
      return -1;
    }
    return 0;
  };
  return newArray.sort((el1, el2) => {
    let number = checkNumberOfLegs(el1, el2);
    if (number === 0) {
      number = checkName(el1, el2);
    }
    return number;
  });
}

export { animalSort };
