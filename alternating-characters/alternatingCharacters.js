function alternatingCharacters(words) {
  return words.reduce(
    (accumulator, word) => accumulator.concat(
      Array.from(word).reduce((totalDeletions, char, idx) => {
        // eslint-disable-next-line no-param-reassign
        totalDeletions = char === word[idx + 1] ? totalDeletions + 1 : totalDeletions;
        return totalDeletions;
      }, 0),
    ),
    [],
  );
}

export { alternatingCharacters };
