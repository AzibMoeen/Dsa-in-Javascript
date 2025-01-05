 

// //  const fab =(n) => {
// //     if(n <= 1) return n;
// //     return fab(n-1) + fab(n-2);
// //  }

// //  console.log(fab(10)) // 55


// //  //without recursion

// //  const fab2 = (n) => {
// //     if(n <=3){
// //         return n
// //     }
// //         let a = 0;
// //         let b = 1;
// //         let c = 0;
// //         for(let i = 0; i <= n-1; i++){
// //             c = a + b;
// //             a = b;
// //             b = c;
// //         }
// //         return c;
// //     }
// //     console.log(fab2(10)) //55

// function isPalindrome(number,palindrom=0){
//     if(number==0){
//       return palindrom
//     }
//     let  x = number%10
//     palindrom = (palindrom*10)+x
//     return isPalindrome(Math.floor(number/10), palindrom)
    
// }
// console.log(isPalindrome(133, 0)) 


// function bubblesort(array,n=array.length){
    
//     if(n==0||n==1){
//         return array
//     }
//     for (let j = 0 ; j < n-1; j++) {
//         if(array[j]>array[j+1]){
//             [array[j],array[j+1]]=[array[j+1],array[j]]
//         }
//     }
//     return bubblesort(array,n-1)
// }

// console.log(bubblesort([9,0,8,0,4,5,6,7],8))


// function reverseStringRecursive(string, a = 0, b = string.length - 1) {
//     let s = string.split('');
//     if (a >= b) {
//         console.log(s.join(''));
//         return;
//     }
//     swap(a, b, s);
//     reverseStringRecursive(s.join(''), a + 1, b - 1);
// }

// reverseStringRecursive("hello");


// function checkPalindrome(string, a = 0, b = string.length - 1) {
//     if (a >= b) {
//         return 
//     }
//     if (string[a] !== string[b]) {
//         return false;
//     }
//     return checkPalindrome(string, a + 1, b - 1);
// }

function FindMid(arr) {
    let j = 0;
    for (let i = 0; i < arr.length; i += 2) {
        if (i + 1 >= arr.length) {
            return j;
        }
        j++;
    }
    return j; // In case the array length is 0, return the initial `j`.
}

console.log(FindMid([1,2,3,4,5,6,7,8,9,10])) //5




