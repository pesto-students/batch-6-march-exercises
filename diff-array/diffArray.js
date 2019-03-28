function diffArray(arrayOne, arrayTwo) {
  const setFromArrayOne = new Set(arrayOne);
  for (const element of arrayTwo) {
    if (setFromArrayOne.has(element)) {
      setFromArrayOne.delete(element);
    } else {
      setFromArrayOne.add(element);
    }
  }
  return Array.from(setFromArrayOne);
}

export { diffArray };
