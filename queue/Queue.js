
class Queue {
  constructor() {
    this.linkedList = [];
  }

  enqueue(value) {
    this.linkedList.push(value);
  }

  toString() {
    return this.linkedList.reduce((acc, elm) => {
      let newValue = acc;
      const newValueConcat = newValue ? `${newValue},` : '';
      if (typeof elm === 'object') {
        newValue = `${newValueConcat}${elm.key}:${elm.value}`;
      } else {
        newValue = `${newValueConcat}${elm}`;
      }
      return newValue;
    }, '');
  }

  peek() {
    const firstItem = this.linkedList[0];
    return !firstItem ? null : firstItem;
  }

  dequeue() {
    const firstValue = this.linkedList.shift();
    return !firstValue ? null : firstValue;
  }

  isEmpty() {
    return Boolean(this.linkedList.length === 0);
  }
}

export {
  Queue,
};
