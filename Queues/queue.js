class Queue {
    constructor(Max_Length) {
      this.Max_Length = Max_Length;
      this.queue = new Array(Max_Length); // Array to store the elements in the queue
      this.front = -1;
      this.rear = -1;
    }
  
    isEmpty() {
      return this.front === -1 && this.rear === -1;
    }
  
    // Check if the queue is full
    isFull() {
      return this.rear === this.Max_Length - 1;
    }
  
    // Add an element to the back of the queue
   enqueue(element){
    if(this.isFull()){
        console.log("queue is full");
        return ;
    }
    if(this.isEmpty()){
        this.front = 0;
    }
    this.rear++;
    this.queue[this.rear] = element;  
   }
    // Remove an element from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      const element = this.queue[this.front];
      if (this.front === this.rear) {
        // Reset the queue when the last element is dequeued
        this.front = -1;
        this.rear = -1;
      } else {
        this.front++;
      }
      return element;
    }
  
    // Peek the front element
    peek() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return -1;
      }
      return this.queue[this.front];
    }
  
    // Get the size of the queue
    size() {
      if (this.isEmpty()) {
        return 0;
      }
      return this.rear - this.front + 1;
    }
  }
  
  // Example usage
  const q = new Queue(100); // Create a queue with a maximum size of 100
  
  q.enqueue(10);
  q.enqueue(20);
  q.enqueue(30);
  
  console.log("Dequeue:", q.dequeue()); // Output: Dequeue: 10
  console.log("Front:", q.peek());      // Output: Front: 20
  console.log("Size:", q.size());       // Output: Size: 2
  

  class CircularQueue {
    constructor(Max_Length) {
      this.Max_Length = Max_Length;
      this.queue = new Array(Max_Length); // Array to store the elements in the queue
      this.front = -1; // Index of the front element
      this.rear = -1;  // Index of the rear element
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.front === -1;
    }
  
    // Check if the queue is full
    isFull() {
      return (this.rear + 1) % this.Max_Length === this.front;
    }
  
    // Add an element to the back of the queue
    enqueue(element) {
      if (this.isFull()) {
        console.log("Queue is full");
        return;
      }
      if (this.isEmpty()) {
        this.front = 0; // Set front to 0 if the queue is initially empty
      }
      this.rear = (this.rear + 1) % this.Max_Length; // Move rear circularly
      this.queue[this.rear] = element;
      console.log(`${element} enqueued`);
    }
  
    // Remove an element from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      const element = this.queue[this.front];
      if (this.front === this.rear) {
        // Reset the queue when the last element is dequeued
        this.front = -1;
        this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.Max_Length; // Move front circularly
      }
      return element;
    }
  
    // Peek the front element
    peek() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return -1;
      }
      return this.queue[this.front];
    }
  
    // Get the size of the queue
    size() {
      if (this.isEmpty()) {
        return 0;
      }
      if (this.rear >= this.front) {
        return this.rear - this.front + 1;
      } else {
        return this.Max_Length - this.front + this.rear + 1;
      }
    }
  }
  
  // Example usage
  const cq = new CircularQueue(5); // Create a circular queue with a maximum size of 5
  
  cq.enqueue(10);
  cq.enqueue(20);
  cq.enqueue(30);
  cq.enqueue(40);
  cq.enqueue(50);
  
  console.log("Dequeue:", cq.dequeue()); // Output: Dequeue: 10
  console.log("Front:", cq.peek());      // Output: Front: 20
  console.log("Size:", cq.size());       // Output: Size: 4
  
  cq.enqueue(60); // Wraps around and adds 60 to the queue
  console.log("Front:", cq.peek());      // Output: Front: 20
  console.log("Size:", cq.size());       // Output: Size: 5
  
  cq.dequeue();
  cq.dequeue();
  console.log("Size after dequeuing:", cq.size()); // Output: Size after dequeuing: 3
  