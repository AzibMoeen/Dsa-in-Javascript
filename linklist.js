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

  prepend(data){
    const node = new Node(data);
    if(!this.head) {
      this.head = this.tail = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  append(data) {
    const node = new Node(data);
    if(!this.head) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }
   
  reverse() {
     
    let prev = null
    let current = this.head;

    while(current){
      let next = current.next 
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev
    this.tail = this.head
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

  FindMid(){
    let mid = this.head
    let end = this.head
    while(end){
       end = end.next
       end = end.next
       mid = mid.next
    }
    console.log("mid",mid)
    return mid
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


const list1 = new LinkedList();
const list2 = new LinkedList();

function Merge(list1,list2){
    const mergedList = new LinkedList()

    let current1 = list1.head
    let current2 = list2.head

    while(current1 && current2){
        if(current1.data < current2.data){
            mergedList.append(current1.data)
            current1 = current1.next
        } else {
            mergedList.append(current2.data)
            current2 = current2.next
        }
    }

    while(current1){
        mergedList.append(current1.data)
        current1 = current1.next
    }

    while(current2){
        mergedList.append(current2.data)
        current2 = current2.next
    }

    return mergedList;
}
