class Stack {
    constructor(){
        this.items = {};
        this.top = -1;
    }
    push(element){
        this.top++;
        this.items[this.top] = element;
        
    }
    pop(){
        if(this.top === 0){
            return null;
        }
        const poppedItem = this.items[this.top];
        delete this.items[this.top];
        this.top--; 
        return poppedItem;
    }
}

function validPrenthisis(s){
    let stack = []
    let map = {
       '(':')',
         '{':'}',
         '[':']'
    }
    for(let char of s){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char)
    }else{
            if(stack.length === 0 || map[stack.pop()] !== char){
                return false
            }
        }
    }
    return stack.length === 0
}

class MinStack{
    constructor(){
        this.stack = []
        this.MinStack = []
    }

    push(val){  
        this.stack.push(val)
        const min = this.MinStack.length === 0 ? val : Math.min(val,this.MinStack[this.MinStack.length-1])
        this.MinStack.push(min)
    }

    pop(){
        const poppedItem = this.stack.pop()
        this.MinStack.pop()
        return poppedItem
    }

    top(){
        return this.stack[this.stack.length - 1]
    }

    getMin(){
        return this.MinStack[this.MinStack.length - 1]
    }

}
