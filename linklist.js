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
      this.head = this.head;
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

    DeleteNthFromEnd(n){

      let current = this.head
      let slow = this.head

      for(let i = 0; i<=n; i++){
        current = current.next
      }

      while(current){
        slow = slow.next
        current = current.next
      }

      slow.next = slow.next.next

      if(slow.next == null){
        this.tail = slow
      }
    }

    DeleteNthFromStart(n){
      if(n<=0||!this.head) return;

      if(n == 1){
       this.deleteHead()
       return;
      }
      let start = this.head
      let count = 1
      while(start && count < n){
        start = start.next
        count++;
      }

     start.next = start.next.next
      if(start.next == null){
        this.tail = start
      }

    }

    IsPalindrome(){

      let slow = this.head
      let fast = this.head

      while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
      }



    let prev = null

    let current = slow
    while(current){
      let next = current.next
      current.next = prev
      prev = current 
      current = next
      

    }

    let left = this.head
    let right = prev
    let result = true
    while(result && right){
      if(left.data !== right.data){
        result = false
      }
      left = left.next
      right = right.next
    }
    console.log("Is Palindrome:", result);
    return true
    }

    Sort01(){
      let current = this.head
      let zeroCount = 0
      let oneCount = 0

      while(current){
        if(current.data === 0){
          zeroCount++
        }else{
          oneCount++
        }
      }


      while(zeroCount >0 ){
        current.data = 0
        zeroCount--
        current = current.next
      }

      while(oneCount > 0){
        current.data = 1
        oneCount--
        current = current.next
      }
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
