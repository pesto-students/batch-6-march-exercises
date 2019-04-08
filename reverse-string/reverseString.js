
function reverseString(str) {
  var str= str.split(' ')
  var reversedString = '';
  for(var i = str.length-1; i=>0; i--){
    reversedString +=str[i];
  }
  return reversedString;
}

export {
  reverseString,
};
