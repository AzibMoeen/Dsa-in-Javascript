function Allocation(arr) {
    let a = 0; 
    let b = ArraySum(arr); 
    let ans = -1;

    while (a <= b) {
        let mid = Math.floor((a + b) / 2);
        let students = 1; 
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (sum > mid) {
               students++;
               sum = arr[i]; 
            }
        }
        if (students <= 2) {
            ans = mid; 
            b = mid - 1; 
        } else {
            a = mid + 1; 
        }
    }

    return ans;
}

function ArraySum(arr) {
    return arr.reduce((sum, value) => sum + value, 0)
}

console.log(Allocation([10, 20, 30, 40]));
