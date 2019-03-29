function abbreviateString(myString) {
  var wordSet = myString.split(" ");
  var firstWord = wordSet[0];
  var lastWord = wordSet[wordSet.length - 1];
  return firstWord + " " + lastWord.charAt(0).toUpperCase() + ".";
}

export { abbreviateString };
