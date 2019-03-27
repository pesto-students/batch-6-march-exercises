
function counterFactory(...args) {
  var counter = 0;
  return {
    increment: function(){
      counter++;
      return counter;      
    },
    decrement: function(){
      counter--;
      return counter;
    }
  }
  return args;
}

export {
  counterFactory,
};
