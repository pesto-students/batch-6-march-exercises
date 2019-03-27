
function isOdd(num) {
  if(num == 1 ){
    return true;
  }
  else if(num %2 != 0){
    return true;
  } else{
    return false;
  }
}

export {
  isOdd,
};
