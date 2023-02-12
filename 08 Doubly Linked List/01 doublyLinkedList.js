class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

let doublyList = new DoublyLinkedList();

console.log(doublyList.push(9));
console.log(doublyList.push(10));
console.log(doublyList.push(11));
console.log(doublyList.push(12));
console.log(doublyList.push(13));
console.log(doublyList.push(13));
