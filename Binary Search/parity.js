


//place array as 
// first occurance is even second is odd and in save sequence onward

function parity(){
    let array = [1,2,3,4,5,6,7,8,9]
    let temp = new Array(array.length)
    let n = array.length
    let evenIndex = 0
    let oddIndex = 1
    for (let index = 0; index < array.length; index++) {
        if(array[index]%2 == 0){
            temp[evenIndex] = array[index]
            evenIndex += 2
        }else{
            temp[oddIndex] = array[index]
            oddIndex += 2
        }
    }
    console.log(temp) 
}
//first 2 even than odd
 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    let even = 0
    for(let i = 0;i<nums.length;i++){
       if(nums[i]%2==0){

           swap(i,even,nums)
           even++
       }
    }
    return nums
};

function swap(i,even,arr){
[arr[i],arr[even]]=[arr[even],arr[i]]

}

console.log(sortArrayByParity([1,2,3,4,5,6,7,8,9])) //[2,1,4,3,6,5,8,7,9]