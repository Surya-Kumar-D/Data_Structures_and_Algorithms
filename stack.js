//Stack Data Structure
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let currentNode = this.first;
      this.first = newNode;
      this.first.next = currentNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.size) return null;
    let currentNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = currentNode.next;
    }
    this.size--;
    return currentNode.value;
  }
}
