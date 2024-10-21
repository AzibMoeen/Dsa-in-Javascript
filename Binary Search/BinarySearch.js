let arr = [1,2,3,4,65,76,86,98,100]
let key = 4

function binarySearch(arr, key) {
    if (!arr || arr.length === 0) {
        throw new Error("Array is null or empty");
    }

    // Sort the array
    arr.sort((a, b) => a - b);

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

    return -1; // Key not found
}

console.log(binarySearch(arr, key))