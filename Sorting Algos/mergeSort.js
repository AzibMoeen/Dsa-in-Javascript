function mergeSort(array) {
    if (array.length <= 1) {
        return array; 
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right)); 
}
function merge(left, right) {
    let array = [];
    let a = 0;
    let b = 0;
    while (a < left.length && b < right.length) {
        if (left[a] < right[b]) {
            array.push(left[a]);
            a++;
        } else {
            array.push(right[b]);
            b++;
        }
    }

    while (a < left.length) {
        array.push(left[a]);
        a++;
    }
    while (b < right.length) {
        array.push(right[b]);
        b++;
    }
    return array;
}

const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
            