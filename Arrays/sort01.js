

// function sort(arr){

//    let a = 0
//    let b= arr.length-1
//    while(a<b){
//     if(arr[a]==0){
//         a++
//     }else if(arr[b]==1){
//         b--
//     }
//     else{
//          swap(a,b,arr)
//     }
//    }
//    return arr


// }


// function swap(a,b,arr){
//     [arr[a],arr[b]]=[arr[b],arr[a]]
//     }
    
//     console.log(sort([1,0,0,1,1]))


//     function sort012(arr){


//         let a = 0
//         let b = 0
//         let c = arr.length-1
//         while(b<=c){
//             if(arr[b]==0){
//                 swap(a,b,arr)
//                 a++
//                 b++
//             }
//             else if(arr[b]==1){
//                 b++
//             }
//             else{
//                 swap(c,b,arr)
//                 c--

//             }
//         }
//         return arr
//     }

//     console.log(sort012([0,1,2,0,2,2,1]))




// function swap01(arr){

//       let a = 0
//       let b = arr.length-1
//       while(a<b){
         
//         if(arr[a]==0){
//             a++
//       }
//       else if(arr[b]==1){
//         b--
//       }
//       else{
//         [arr[a],arr[b]]=[arr[b],arr[a]]
//       }
//     }
//     return arr
// }

// console.log(swap01([1,0,1,0]))

// function swap012(arr){
// let a = 0
// let b = 0
// let c = arr.length-1

// while(b<c)
//     {
      
//         if(arr[b]==0)




//     }






// }

function sort(arr){
       let i = 0
       let j = arr.length-1
       while(i<=j){
           if(arr[i]==0){
            i++
           }
           else if(arr[j]==1){
            j--
           }
           else{
            [arr[i],arr[j]] = [arr[j],arr[i]]
           }
       }
       return arr
}
console.log(sort([1,0,0,1,1]))

// function sort012(arr){
// let a = 0
// let b = 0
// let c = arr.length-1

// while(b<=c){
//    if(arr[b]==0){
//     [arr[b],arr[a]] = [arr[a],arr[b]]
//       b++
//       a++
//    }
//    else if(arr[b]==2){
//     [arr[b],arr[c]]= [arr[c],arr[b]]
//      c--
//    }
//    else{
//     b++
//    }
// }
// return arr
// }

// console.log(sort012([1,2,0,1,0,2,0,2]),"God Job!!!")