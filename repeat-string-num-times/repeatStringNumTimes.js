
function repeatStringNumTimes(string, repetitionNumber) {
  if (repetitionNumber <= 0) {
    return '';
  }
  return string + repeatStringNumTimes(string, repetitionNumber - 1);
}

export {
  repeatStringNumTimes,
};
