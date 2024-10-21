
let arr = [3,5,343,52,5,2532]


let reverseArr = (arr) => {
let start = 0
let end = arr.length-1


while(start<=end){
    swap(arr, start, end)

    start++
    end--
}
return arr
}

//make swap function

let swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

console.log(reverseArr(arr))


