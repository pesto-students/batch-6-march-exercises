
class Queue {
  constructor() {
    this.linkedList = [];
  }

  enqueue(item) {
    this.linkedList.push(item);
  }

  toString(stringifier) {
    let list = this.linkedList;
    if (stringifier) {
      list = this.linkedList.map(cur => stringifier(cur));
    }
    return list.join(',');
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.shift();
  }

  isEmpty() {
    return this.linkedList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList[0];
  }
}

export {
  Queue,
};
