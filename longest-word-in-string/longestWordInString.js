function longestWordInString(string) {
  const stringArray = string.split(' ');
  return stringArray.reduce((initial, next) => (initial.length > next.length ? initial : next))
    .length;
}

export { longestWordInString };
