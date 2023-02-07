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

  // will add an element at the end of list
  push(value) {
    var newNode = new Node(value);

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

  // will remove the last list item
  pop() {
    var current = this.head;
    var newTail = current;

    if (!this.head) {
      return undefined;
    }

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
}

var list = new SinglyLinkedList();

console.log(list.push("HELLO"));
console.log(list.push("GOODBYE"));

console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);
