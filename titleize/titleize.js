
function titleize(string) {
  const matcher = /([a-z])([a-z]*)/ig;
  return string.replace(matcher, (match, p1, p2) => `${p1.toUpperCase()}${p2.toLowerCase()}`);
}

export {
  titleize,
};
