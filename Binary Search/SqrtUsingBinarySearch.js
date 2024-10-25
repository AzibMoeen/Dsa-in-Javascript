function th(x) {
    let a = 0;
    let b = x;
    let ans = -1;

    while (a <= b) {
        let mid = Math.floor((a + b) / 2); // Calculate mid inside the loop
        let square = mid * mid;

        if (square === x) {
            console.log(mid);
            return mid; // Found exact square root
        } else if (square < x) {
            ans = mid; // Update answer to the current mid
            a = mid + 1; // Move right
        } else {
            b = mid - 1; // Move left
        }
    }
    return ans; // Return the closest integer less than or equal to the square root
}

function sqrt() {
    console.log(th(1)); // Example call
}

sqrt();
