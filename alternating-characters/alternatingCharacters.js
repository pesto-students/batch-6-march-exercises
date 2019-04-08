function alternatingCharacters(...args) {
  var unverifiedArray = args[0];
  return unverifiedArray.map(unverifiedString => {
    var unverifiedChars = unverifiedString.split("");

    return unverifiedChars.reduce(
      (deletionsCount, char, currentIndex, chars) => {
        var nextIndex = currentIndex + 1;
        var isDeletionRequired = char === chars[nextIndex];

        if (isDeletionRequired) {
          deletionsCount++;
        } else {
          deletionsCount;
        }
        return deletionsCount;
      },
      0
    );
  });
}

export { alternatingCharacters };
