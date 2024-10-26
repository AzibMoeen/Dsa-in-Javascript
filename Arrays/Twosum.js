

 function twoSum(nums, target) {
let i = 0
let j = nums.length-1
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

console.log(twoSum([2,7,11,15],9)) // [0,1]