// function reverse(arr){
      

//     let a = 0
//     let b = arr.length-1
//     while(a<=b){
       
//         swap(a,b,arr)
//         a++
//         b--
       
//     }
//     return arr

// }

// function swap(a,b,arr){
// [arr[a],arr[b]]=[arr[b],arr[a]]
// }

// console.log(reverse([1,0,0,1,1]))



function reverse2(arr){
      let i = 0
      let j = arr.length-1
      while(i<=j){
        [arr[i],arr[j]] = [arr[j],arr[i]]
        i++
        j--
      }
      return arr
}


console.log(reverse2([0,1,2,3,4,5]))