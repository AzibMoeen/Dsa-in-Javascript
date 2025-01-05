function merge(array) {
    if (array.length <= 1) {
        return array; // Base case: an array with 1 or 0 elements is already sorted
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return mergee(merge(left), merge(right)); // Recursively merge the sorted halves
}
function mergee(left,right){
    let array = []
    let a = 0
    let b = 0
    while(a<left.lenght&&b<right.length){
        if(left[a]<right[b]){
            array.push(left[a])
            a++
        }else{
            array.push(right[b])
            b++
        }
    }

    while(a<left.length){
        array.push(left[a])
            a++
    }
    while(b<right.length)
    {
        array.push(right[b])
        b++
    }
    return array
}

// Example Usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = merge(unsortedArray);

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
