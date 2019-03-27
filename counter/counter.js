
function counter(...args) {
  var counter = 0;

  return function (){
    counter++;
    return counter;
  }
  return args;
}

export {
  counter,
};
