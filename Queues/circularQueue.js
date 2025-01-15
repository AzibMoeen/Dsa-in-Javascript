class circularQueue{

 constructor(Max_Length){
    this.Max_Length = Max_Length
    this.queue = new Array(Max_Length)
    this.front = -1
    this.rear = -1
 }

isEmpty(){
     return this.front == -1
}
isFull(){

    return (this.rear+1)%this.Max_Length === this.front
}
Queue(element){
 if(this.isFull()){
        console.log("Queue is full")
        return
 }
    if(this.isEmpty()){
        this.front = 0
    }
    this.rear = (this.rear+1)%this.Max_Length
    this.queue[this.rear]=element
}

dequeue(){
   if(this.isEmpty()){
         console.log("Queue is empty")
         return
   }
   const element = this.queue[this.front]
   if(this.rear==this.front){
    this.rear==-1
    this.front=-1
   }else{
    this.front = (this.front+1)%this.Max_Length
    return element
   }
}

Size(){
    if(this.rear>=this.front){
        return this.rear-this.front+1
    }else{
        return this.Max_Length-this.front+this.rear+1
    }

}

}

const queue = new circularQueue(5)
queue.Queue(1)
queue.Queue(2)
queue.Queue(3)
queue.Queue(4)

console.log(queue.Size())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.Size())