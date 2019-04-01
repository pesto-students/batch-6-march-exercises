class Queue {
  constructor() {
    this.linkedList = [];
  }

  enqueue(parameter) {
    this.linkedList = this.linkedList.concat(parameter);
  }

  dequeue() {
    if (this.linkedList.length === 0) {
      return null;
    }
    const firstElement = this.linkedList[0];
    this.linkedList = this.linkedList.slice(1);
    return firstElement;
  }

  toString(stringifier) {
    if (this.linkedList[0] instanceof Object) {
      return this.linkedList.map(stringifier).join(',');
    }
    return this.linkedList.join(',');
  }

  peek() {
    return this.linkedList.length === 0 ? null : this.linkedList[0];
  }

  isEmpty() {
    return this.linkedList.length === 0;
  }
}

export {
  Queue,
};
