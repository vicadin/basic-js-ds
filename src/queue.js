const { NotImplementedError } = require("../extensions/index.js");
const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.first;
  }
  enqueue(value) {
    if (this.first === null) {
      this.first = new ListNode(value);
      this.last = this.first;
    } else {
      this.last.next = new ListNode(value);
      this.last = this.last.next;
    }
  }

  dequeue() {
    let head = this.first;
    this.first = head.next;
    return head.value;
  }
}

module.exports = {
  Queue,
};
