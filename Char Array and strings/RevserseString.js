
let string = "hello"

function reverseString(string) {
    let arr = string.split('');
    let a = 0;
    let b = arr.length - 1;
    while (a <= b) {
        swap(a, b, arr);
        a++;
        b--;
    }
    console.log(arr.join(''));
}

function swap(a, b, arr) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

reverseString(string);