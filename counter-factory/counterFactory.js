
function counterFactory(...args) {
  var counter = 0;
  
  return {
    increment: function(){
      return counter+=1;
    },
    decrement: function(){
      return counter-=1;
    }
  }
}

export {
  counterFactory,
};
