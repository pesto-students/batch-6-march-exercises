
function factorial(number) {
   
  factorial=1;
  if(number>0)
  for(var i=1;i<=number;i++){
    factorial=factorial*number;
  }
  return factorial;
}

export {
  factorial,
};
