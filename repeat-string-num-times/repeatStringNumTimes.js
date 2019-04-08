
function repeatStringNumTimes(givenString, numberOfRepetitions) {
  if(numberOfRepetitions <= 0){
    return ''
  }else{
    return givenString + repeatStringNumTimes(givenString, numberOfRepetitions - 1);
  };
}

export {
  repeatStringNumTimes,
};
