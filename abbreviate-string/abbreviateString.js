
function abbreviateString(str) {
  if(typeof str === 'string'){
  var str = str.split(" ")
  var initials =  str.pop().toUpperCase();
  console.log(initials);
  var abrreviatedString = str[0] + " " + initials[0];
  return abbreviatedString;
  } else {
    throw ("not a string");
  }
}

export {
  abbreviateString,
};
