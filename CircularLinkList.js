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
   


