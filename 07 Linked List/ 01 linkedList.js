class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Adding a new node to the end of the Linked List!
  push(value) {
    let newNode = new Node(value);

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

  // Removing a node from the end of the Linked List!
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // Removing a new node from the beginning of the Linked List!
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  // Adding a new node to the beginning of the Linked List!
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // Retrieving a node by it's position in the Linked List!
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter != index) {
      current = current.next;
      ++counter;
    }

    return current;
  }

  // Changing value of a node based on it's position in the Linked List
  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.value = val;
      return true;
    }

    return false;
  }

  // Adding a node to the Linked List at a specific position
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value) && true;
    if (index === 0) return this.unshift(value) && true;

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }

  // Removing a node from the Linked List at a specific position
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;

    this.length--;
    return removedNode;
  }
}

let list = new SinglyLinkedList();
list.push(100);
list.push(700);
list.push(300);
list.push(1400);
console.log(list);
console.log("---------------------------");
console.log(list.insert(2, "Numbers"));
console.log(list.remove(list.length - 1));
console.log(list);
