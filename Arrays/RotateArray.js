

// Rotate array by k

function rotate(){
    
    let k = 3
    let array = [0,2,5,8,9,1]
    let temp = new Array(array.length)
    let n = array.length
    for (let index = 0; index < array.length; index++) {
        temp[(index+k)%n] = array[index]
    }
    console.log(temp) 
}

rotate()