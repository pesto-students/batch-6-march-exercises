
function bouncer(givenArray) {
  givenArray = givenArray.filter(function(value){
      return value;
  });
  return givenArray;
}

export {
  bouncer,
};
