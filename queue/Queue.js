
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  toString() {
    // let queue = this.queue;
    // if (stringifier) {
    //   queue = this.queue.map(stringifier);
    // }
    return this.queue.join(',');
  }
}

export {
  Queue,
};
