function repeatStringNumTimes(string, numberOfTimes) {
  let result = '';
  if (numberOfTimes < 0) {
    return '';
  }
  let timesRepeated = 0;
  while (timesRepeated < numberOfTimes) {
    result += string;
    timesRepeated += 1;
  }
  return result;
}

export { repeatStringNumTimes };
