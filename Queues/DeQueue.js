class Deque {
    constructor(maxSize) {
      this.queue = new Array(maxSize);
      this.front = -1;
      this.rear = -1;
      this.maxSize = maxSize;
    }
  
    isEmpty() {
      return this.front === -1;
    }
  
    isFull() {
      return (this.rear + 1) % this.maxSize === this.front;
    }
  
    insertFront(value) {
      if (this.isFull()) {
        console.log("Deque is full");
        return false;
      }
      if (this.isEmpty()) {
        this.front = this.rear = 0;
      } else {
        this.front = (this.front - 1 + this.maxSize) % this.maxSize;
      }
      this.queue[this.front] = value;
      return true;
    }
  
    insertRear(value) {
      if (this.isFull()) {
        console.log("Deque is full");
        return false;
      }
      if (this.isEmpty()) {
        this.front = this.rear = 0;
      } else {
        this.rear = (this.rear + 1) % this.maxSize;
      }
      this.queue[this.rear] = value;
      return true;
    }
  
    deleteFront() {
      if (this.isEmpty()) {
        console.log("Deque is empty");
        return false;
      }
      const value = this.queue[this.front];
      if (this.front === this.rear) {
        this.front = this.rear = -1; // Deque is now empty
      } else {
        this.front = (this.front + 1) % this.maxSize;
      }
      return value;
    }
  
    deleteRear() {
      if (this.isEmpty()) {
        console.log("Deque is empty");
        return false;
      }
      const value = this.queue[this.rear];
      if (this.front === this.rear) {
        this.front = this.rear = -1; // Deque is now empty
      } else {
        this.rear = (this.rear - 1 + this.maxSize) % this.maxSize;
      }
      return value;   
    }
  
    getFront() {
      if (this.isEmpty()) {
        console.log("Deque is empty");
        return -1;
      }
      return this.queue[this.front]; 
    }
  
    getRear() {
      if (this.isEmpty()) {
        console.log("Deque is empty");
        return -1;
      }
      return this.queue[this.rear];
    }
  }
  
  // Example usage
  const deque = new Deque(5);
  
  deque.insertRear(10); // Insert at rear
  deque.insertRear(20);
  deque.insertFront(5); // Insert at front
  console.log(deque.getFront()); // 5
  console.log(deque.getRear()); // 20
  deque.deleteFront(); // Remove from front
  deque.deleteRear(); // Remove from rear
  console.log(deque.getFront()); // 10
  