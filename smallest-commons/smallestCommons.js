function smallestCommons(numbers) {
  let smallerNumber;
  let largerNumber;
  if (numbers[0] < numbers[1]) {
    [smallerNumber, largerNumber] = numbers;
  } else {
    [largerNumber, smallerNumber] = numbers;
  }
  let i = largerNumber;
  while (true) {
    let num = smallerNumber;
    for (; num <= largerNumber; num += 1) {
      if (i % num !== 0) {
        break;
      }
    }
    if (num > largerNumber) {
      break;
    }
    i += 1;
  }
  return i;
}

export {
  smallestCommons,
};
