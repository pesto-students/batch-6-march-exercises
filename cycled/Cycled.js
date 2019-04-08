class Cycled {
  constructor(array) {
    this.array = array;
    this.index = 0;
  }

  next() {
    return this[Symbol.iterator]().next().value;
  }

  [Symbol.iterator]() {
    const { array } = this;
    let { index } = this;
    return {
      next() {
        const currentItem = array[index];
        index += 1;
        if (index >= array.length) {
          index = 0;
        }
        this.index = index;
        return { value: currentItem, done: false };
      },
    };
  }

  current() {
    return this.array[this.index];
  }

  previous() {
    const previousIndex = this.index === 0 ? this.array.length - 1 : this.index - 1;
    return this.array[previousIndex];
  }
}

export {
  Cycled,
};
