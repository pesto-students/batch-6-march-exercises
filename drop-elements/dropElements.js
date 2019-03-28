function dropElements(array, predicate) {
  return array.filter(element => predicate(element));
}

export { dropElements };
