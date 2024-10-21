let arr = [0,1,0,0,1,0,1]

function sort(arr){
    let a = 0
    let b = arr.length-1
      
    while(a<b){

        if(arr[b]==1&&a<b){
            b--
        }
        if(arr[a]==0&&a<b){
            a++
        }
        swap(a,b,arr)
        a++
        b--
    }
    return arr
        


}

function swap(a,b,arr){
    [arr[a],arr[b]] = [arr[b],arr[a]]
}

console.log(sort(arr))

//now sort [0,1,0,2,0,1,2] with same approach using 2 or 3 pointers

// let arr2 = [0,1,0,2,0,1,2]

// function sort2(arr){
//     let a = 0
//     let b = arr.length-1
//     let c = 0
      
//     while(c<=b){

//         if(arr[c]==0){
//             swap(a,c,arr)
//             a++
//             c++
//         }
//         else if(arr[c]==1){
//             c++
//         }
//         else{
//             swap(c,b,arr)
//             b--
//         }
//     }
//     return arr

// }

// console.log(sort2(arr2))

let arr2 = [0,1,0,2,0,1,2]

function sort2(arr){
    let a = 0
    let b = arr.length-1
    let c = 0
      
    while(c<=b){
     if(arr[c]==0){
        swap(a,c,arr)
        a++
        c++
     }
     else if(arr[c]==1){
      c++
     }
     else{
        swap(c,b,arr)
        b--
     }
    }
    return arr
  
}

console.log(sort2(arr2))