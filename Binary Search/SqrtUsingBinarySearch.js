function th(x) {
    let a = 0;
    let b = x;
    let ans = -1;

    while (a <= b) {
        let mid = Math.floor((a + b) / 2); 
        let square = mid * mid;

        if (square === x) {
            console.log(mid);
            return mid; 
        } else if (square < x) {
            ans = mid; 
            a = mid + 1; 
        } else {
            b = mid - 1; 
        }
    }
    return ans;
}

function sqrt() {
    console.log(th(1)); // Example call
}

sqrt();
