


/**
 * Merges two sorted arrays into one sorted array in non-decreasing order.
 * @returns {number[]} The merged sorted array.
 */
const merge = () => {
    let arr1 = [0,0,0,0,0,1, 3, 5, 7, 9];
    let arr2 = [2, 4, 6, 8, 10,11];

    let a = arr1.length - 1;
    let b = arr2.length - 1;
    let c = a + b + 1;
    while (a >= 0 || b >= 0) {
        if (arr1[a] > arr2[b]) {
            arr1[c] = arr1[a];
            a--;
            c--;
        } else {
            arr1[c] = arr2[b];
            b--;
            c--;
        }
    }
    while (b >= 0) {
        arr1[c] = arr2[b];
        b--;
        c--;
    }
    return arr1;
};

console.log(merge());
