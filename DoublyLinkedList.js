class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.tail;
      currentNode.next = newNode;
      newNode.prev = currentNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let currentNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentNode.prev;
      this.tail.next = null;
      currentNode.prev = null;
    }
    this.length--;
    return currentNode;
  }
  shift() {
    let currentNode = this.head;
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      currentNode.next.prev = null;
      this.head = currentNode.next;
      currentNode.next = null;
    }

    this.length--;
    return currentNode.val;
  }
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      this.head = newNode;
      currentNode.prev = newNode;
      newNode.next = currentNode;
    }

    this.length++;
    return newNode.val;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let average = Math.floor(this.length / 2);
    if (index <= average) {
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        counter++;
        current = current.next;
      }
      return current;
    } else if (index > average) {
      let counter = this.length - 1;
      let current = this.tail;
      while (counter !== index) {
        counter--;
        current = current.prev;
      }
      return current;
    }
  }
  set(index, val) {
    let currentNode = this.get(index);
    if (currentNode) {
      currentNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    afterNode.prev = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    let currentNode;
    if (index === 0) {
      this.shift();
      return true;
    } else if (index === this.length - 1) {
      this.pop();
      return true;
    }
    currentNode = this.get(index);
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
    currentNode.next = null;
    currentNode.prev = null;

    this.length--;
    return currentNode.val;
  }
}
