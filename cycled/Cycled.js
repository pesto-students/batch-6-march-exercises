
class Cycled {
  constructor(array) {
    this.arr = array;
    this.index = 0;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    this.index += 1;
    if (this.index >= this.arr.length) {
      this.index = 0;
    }
    return this.arr[this.index];
  }

  current() {
    return this.arr[this.index];
  }

  previous() {
    this.index -= 1;
    if (this.index < 0) {
      this.index = this.arr.length + 1;
    }
  }
}

export {
  Cycled,
};
