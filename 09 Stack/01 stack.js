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

  // Add a value to the top of the stack!
  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  // Remove a value from the top of the stack!
  pop() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}

let stack = new Stack();

console.log(stack.push("Start"));
console.log(stack.push("0"));
console.log(stack.push("1"));
console.log(stack.push("2"));
console.log(stack.push("3"));
console.log(stack.push("end"));

console.log(stack.pop()); // end
console.log(stack.pop()); // 3
