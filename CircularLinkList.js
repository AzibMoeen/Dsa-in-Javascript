class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}



class CircularLinkedList {
    constructor() {
        this.head = null;
    }
   insert(data) {
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
            newNode.next = this.head;
        }else{
            let current = this.head;
            while(current.next!==this.head){
                current = current.next
            }
            current.next = newNode;
            newNode.next = this.head;
        }
   }
   insertAtBeginning(data) {
    const newNode = new Node(data);
   if(!this.head){
    this.head = newNode;
    newNode.next = this.head;
   }
   else{
    let current = this.head;
    while(current.next!==this.head){
        current = current.next
    }
    newNode.next = this.head;
    current.next = newNode;
    this.head = newNode;
   }
    }
    Delete(data) {
        if (!this.head) return;
        let current = this.head;
        let prev = null;
    
        if(current.data === data) {

            while(current.next !== this.head){
                current = current.next;
            }
            if(current === this.head ){
                this.head = null;
                return;
            }
            else{
                current.next = this.head.next
                this.head = this.head.next;
            }
            return;
        }
        current = this.head
        prev = current

        while(current.next!==this.head&& current.data !==data){
            prev = current;
            current = current.next;
        }
        if(current.data === data){
            prev.next = current.next;
            current = null;
        }
        return; 
    } 

    DeleteAtBeginning(){
        if(!this.head) return;
        if(this.head.next === this.head){
            this.head = null
            return;
        }
        let current = this.head;
        while(current.next !== this.head){
            current = current.next;
        }
        current.next = this.head.next;
        this.head = this.head.next;
    }

    DeleteAtEnd(){
        if(!this.head)  return;
        if(this.head.next === this.head){
            this.head = null
            return;
        }
        let current = this.head;
        while(current.next.next !== this.head){
            current = current.next;
        }
      


        current.next = this.head;
    }

    checkCircular(){
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
            if(slow === fast){
                return true;
            }
        }
        return false;
    }

    Sort(){
        if(!this.head  || this.head.next === this.head) return;

        let end = null;
        let swapped 

        do{
            swapped = false;
            let current = this.head;
            while(current.next !== end && current.next !== this.head){
                if(current.data > current.next.data){
                    let temp = current.data;
                    current.data = current.next.data;
                    current.next.data = temp;
                    swapped = true;
                }
                current = current.next;
            }
            end = current;
                    
        }while(swapped);
}

InsertinSortedOrder(data){
    const newNode = new Node(data);
    if(!this.head){
        this.head = newNode;
        newNode.next = this.head;
        return;
    }
    let current = this.head;

    if(current.data > data){
        while(current.next !== this.head){
            current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;
        this.head = newNode;
        return;
    }
    while(current.next !== this.head && current.next.data < data){
        current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    return;
}
    
    display() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let result = [];
        let temp = this.head;

        do {
            result.push(temp.data);
            temp = temp.next;
        } while (temp !== this.head);

        console.log("Circular List:", result.join(" -> "));
    }

    CheckTwoIdentical(list1, list2){

        if(list1 === null && list2 === null){
            return true;
        }
        if(list1 === null || list2 === null){
            return false;
        }
       let current1 = list1.head;
       let current2 = list2.head;
       do{
        if(current1.data !== current2.data) return false
        current1 = current1.next;
        current2 = current2.next;
        } while(current1 !== list1.head && current2!== list2.head)
       
        while(current1 !== list1.head || current2 !== list2.head) return false;

        return true;
    }
   

}

// Example usage:
const cll = new CircularLinkedList();
cll.insert(10);
cll.insert(20);
cll.insert(30);
cll.insert(40);

cll.display(); // Circular List: 10 -> 20 -> 30 -> 40

cll.Delete(20);
cll.Delete(10);
cll.display(); // Circular List: 30 -> 40
   


