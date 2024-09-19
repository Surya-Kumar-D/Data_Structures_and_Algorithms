//Node is a piece of data = val
//reference to the next node = next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;

    let current = this.head;
    let newTail = current;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      while (current.next) {
        newTail = current;
        current = current.next;
      }

      this.tail = newTail;
      this.tail.next = null;
    }

    this.length--;
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }
  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(val) {
    if (val < 0 || val >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== val) {
      counter++;
      current = current.next;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(i, val) {
    let newNode = new Node(val);
    if (i < 0 || i > this.length) return false;
    if (i === this.length) {
      this.push(newNode.val);
      return true;
    }
    if (i === 0) {
      this.unShift(newNode.val);
      return true;
    }
    let foundNode = this.get(i - 1);
    if (!foundNode) return false;
    let temp = foundNode.next;
    foundNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(i) {
    if (i < 0 || i >= this.length) return undefined;
    if (this.length - 1 === i) {
      return this.pop();
    }
    if (i === 0) {
      return this.shift();
    }
    let foundNode = this.get(i - 1);
    if (!foundNode) return undefined;
    let removed = foundNode?.next;
    foundNode.next = removed?.next;
    this.length--;
    return removed;
  }
  reverse() {
    this.tail = this.head;
    let next = null;
    let prev = null;
    let node = this.head;
    while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    this.head = prev;
    return this;
  }
}
