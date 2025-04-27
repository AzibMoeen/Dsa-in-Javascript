class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST{
constructor(){
    this.root = null
}
insert(data){
    const newNode = new Node(data)
    if(this.root === null) {
        this.root = newNode
        return
    }

    let current = this.root
    while(true){
        if(data < current.data){
            if(current.left === null){
                current.left = newNode
                return
            }
            current = current.left
        }else{
            if(current.right === null){
                current.right = newNode
                return
            }
            current = current.right
        }
    }

}

}



class BinaryTree{
    constructor(){
        this.root = null
    }
    insert(data){
        const newNode = new Node(data)
        if(!this.root){
            this.root = newNode
            return
        }

        let queue = [this.root]
        while(queue.length){
            let current = queue.shift()
            if(current.left === null){
                current.left = newNode
                return
            } else {
                queue.push(current.left)
            }
            if(current.right === null){
                current.right = newNode
                return
            } else {
                queue.push(current.right)
            }
        }
    }
}



function bfs(root){
    if(!root) return []
        let queue = [root]
        let result = []
      while(queue.length){
        let current = queue.shift()
        result.push(current.data)
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
      }
}

function dfs(root){
    if(!root) return []
    let stack = [root]
    let result = []
    while(stack.length){
        let current = stack.pop()
        result.push(current.data)
        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }
    return result
}
function dfsRecursive(root){
    if(!root) return []
    let result = []
    function traverse(node){
        if(!node) return
        result.push(node.data)
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return result
}