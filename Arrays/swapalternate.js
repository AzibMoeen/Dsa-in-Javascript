let arr = [2,35,25,252,52,5]


let swapAlternate = (arr) => {


for(let i =0;i<=arr.length-1;i+=2)
    if(i+1<arr.length){
        swap(arr, i, i+1)
    }
    return arr


}

const swap = (arr,a,b)=>{

[arr[a],arr[b]] = [arr[b],arr[a]]


}

console.log(swapAlternate(arr))


//(unique.indexOf(arr[i]) === -1)      

// const swwap = (arr)=>{
//     for(let i =0;i<=arr.length;i+=2){
//         if(i+1<arr.length){
//             swap(i,i+1,arr)
//         }
//     }

// }