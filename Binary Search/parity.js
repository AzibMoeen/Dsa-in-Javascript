// Place array as first occurrence is even, second is odd, and in same sequence onward

function parity(){
    // Initialize the original array
    let array = [1,2,3,4,5,6,7,8,9]
    // Create a temporary array of the same length
    let temp = new Array(array.length)
    // Get the length of the array
    let n = array.length
    // Initialize even index to 0 (even positions)
    let evenIndex = 0
    // Initialize odd index to 1 (odd positions)
    let oddIndex = 1
    // Loop through each element in the original array
    for (let index = 0; index < array.length; index++) {
        // Check if the element is even
        if(array[index]%2 == 0){
            // Place the even element at the current even index in temp array
            temp[evenIndex] = array[index]
            // Move to the next even index (every other position)
            evenIndex += 2
        }else{
            // Place the odd element at the current odd index in temp array
            temp[oddIndex] = array[index]
            // Move to the next odd index (every other position)
            oddIndex += 2
        }
    }
    // Print the rearranged array
    console.log(temp) 
}
// Call the parity function
parity()

// First even elements, then odd elements
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    // Initialize pointer for even elements
    let even = 0
    // Loop through each element in nums array
    for(let i = 0; i < nums.length; i++){
        // Check if the element is even
       if(nums[i]%2 == 0){
           // Swap the even element to the front
           swap(i, even, nums)
           // Move the even pointer forward
           even++
       }
    }
    // Return the rearranged array
    return nums
};

// Function to swap elements at indices i and even in the array
function swap(i, even, arr){
    // Swap elements using destructuring assignment
    [arr[i], arr[even]] = [arr[even], arr[i]]
}

// Test the sortArrayByParity function
console.log(sortArrayByParity([1,2,3,4,5,6,7,8,9])) // [2,4,6,8,5,1,7,3,9]  