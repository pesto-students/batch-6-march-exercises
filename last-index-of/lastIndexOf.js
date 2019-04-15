function lastIndexOf(target, array) {
  const reversedArray = [...array].reverse();
  const index = reversedArray.indexOf(target);
  if (index === -1) {
    return -1;
  }
  return array.length - 1 - index;
}

export { lastIndexOf };
