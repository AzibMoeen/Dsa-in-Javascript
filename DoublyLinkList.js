class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
 
    append(data) {
      const node = new Node(data);
      if (!this.head) {
        this.head = this.tail = node;
        return;
      }
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  
    // Add to beginning
     prepend(data) {
      const node = new Node(data);
      if (!this.head) {
        this.head = this.tail = node;
        return;
      }
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  
    // Delete from beginning
    deleteHead() {
      if (!this.head) return;
      if (this.head === this.tail) {
        this.head = this.tail = null;
        return;
      }
      this.head = this.head.next;
      this.head.prev = null;
    }
  
    // Delete from end
    deleteTail() {
      if (!this.tail) return;
      if (this.head === this.tail) {
        this.head = this.tail = null;
        return;
      }
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  
    // Display forward
    displayForward() {
      let current = this.head;
      let result = "";
      while (current) {
        result += current.data + " <-> ";
        current = current.next;
      }
      result += "null";
      console.log("Forward:", result);
    }
  
    // Display backward
    displayBackward() {
      let current = this.tail;
      let result = "";
      while (current) {
        result += current.data + " <-> ";
        current = current.prev;
      }
      result += "null";
      console.log("Backward:", result);
    }
  }

  const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.prepend(0);
    list.prepend(-1);
    list.prepend(-2);
    list.prepend(-3);


    list.displayForward(); 
    
    list.displayBackward();





    function temp(array){
    
      let length = array.length
      let result = new Array(length).fill(0)

      let stack = []
      for(let i = 0 ;i<length;i++){
      while(stack.length&&array[i]>array[stack[stack.length-1]]){
        let index = stack.pop()
        result[index] = i - index
      }
      stack.push(i)
    }
    return result
    }


    console.log(temp([73, 74, 75, 71, 69, 72, 76, 73]))