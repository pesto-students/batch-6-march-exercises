function* generatorIterable() {
  let yieldValue = 0;
  while (yieldValue <= 4) {
    yieldValue += 1;
    yield yieldValue;
  }
}

export { generatorIterable };
