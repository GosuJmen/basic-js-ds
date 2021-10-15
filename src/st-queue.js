const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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

 function ListNode(x) {
  this.value = x;
  this.next = null;
 }
 

module.exports = class Queue {

  constructor() {
    this.value = undefined
    this.next = null
  }

  getUnderlyingList() {
    return this
  }

  enqueue(value) {
    if(this.value === undefined) {
      this.value = value
    } else {
      if(this.next != null) {
        let temp = this.next
        while(temp.next != null) {
          temp = temp.next
        }
        temp.next = new ListNode(value)  
      } else {
        this.next = new ListNode(value)
      }
    }
  }

  dequeue() {
    let temp = this.value
    if(this.next === null) {
      this.value = undefined
    } else {
      this.value = this.next.value
      this.next = this.next.next
    }
    return temp
  }
}
