

 function twoSum(nums, target) {
let i = 0
let j = nums.length-1
nums.sort((a,b)=>a-b)
    while(i<=j){
        if(nums[i]+nums[j]==target){
            return [i,j]
        }
        else if(nums[i]+nums[j]>target){
            j--
        }
        else{
            i++
        }
    }
};

console.log(twoSum([2,5,35,3,65],8)) // [0,1]