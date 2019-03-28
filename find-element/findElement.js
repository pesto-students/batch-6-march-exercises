function findElement(array, predicate) {
  return array.find(element => predicate(element));
}

export { findElement };
