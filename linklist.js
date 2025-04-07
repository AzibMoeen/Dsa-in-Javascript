class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }

  append(data) {
    const node = new Node(data);
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  deleteHead() {
    if (!this.head) return;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
  }

  deleteTail() {
    if (!this.tail) return;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
  }

  display() {
    let current = this.head;
    let result = "";
    while (current) {
      console.log(current.next)
      current = current.next;
    }
  }
}


const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.append(28929);
list.prepend(8229847)
list.display();      

list.deleteHead();
list.display();      
list.deleteTail();
list.display();       
