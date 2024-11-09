let arr = [1,2,3,4,65,76,86,98,100]
let key = 4

function binarySearch(arr, key) {
    if (!arr || arr.length === 0) {
        throw new Error("Array is null or empty");
    }

    

    let start = 0;
    let end = arr.length - 1;

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

    return -1; 
}

console.log(binarySearch(arr, key))