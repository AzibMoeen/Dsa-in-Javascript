

function find(arr){
    let a = 0
    let b = arr.length-1
    let mid = Math.floor((a+b)/2)
    while(a<b){
        if(arr[mid]>=arr[0]){
            a = mid+1
        }
        else{
            b= mid
        }
        mid = Math.floor((a+b)/2)
    }
     return a
}
function binarySearch(arr,start,end, key) {
    if (!arr || arr.length === 0) {
        throw new Error("Array is null or empty");
    }
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === key) {
            return mid;
        } else if (arr[mid] < key) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1; // Key not found
}
let arr = [4,5,6,7,8,1,2]
let pivot = find(arr)

let k = 1
if(k>arr[pivot]&&k<arr[arr.length-1]){
    console.log(binarySearch(arr,pivot,arr.length-1,k))
}
else{
    console.log(binarySearch(arr,0,pivot,k))
}