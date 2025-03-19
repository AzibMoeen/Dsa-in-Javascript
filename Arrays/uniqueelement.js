// consider a array where every element is coming 2 times but one element is coming one time your task is to find that elemnt using counter approach

let arr = [2,43,43,2,7,33,33]

let findUniqueElement = (arr) => {
let counter = {}
for(let i=0;i<arr.length-1;i++){
    if(counter[arr[i]])
        {
            counter[arr[i]]++
        }
    else{
        counter[arr[i]]=1
    }
}

for(let key in counter){
    if(counter[key]===1){
        return key
    }
}
}

console.log(findUniqueElement(arr))

// //approach 2

const findUniqueElement2 = (arr) => {
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        ans = ans ^ arr[i];
    }
    return ans;
};

console.log(findUniqueElement2(arr));


//unique number of occurance in array without counter

//for example [1,0] 1 comes one time and 0 also so return false 

//arr[2,2,3,4,4]
// 2 and 4 comes same sumber of times so return false





const findElement = (array) => {

    let obj = {}
    for(let i = 0;i<array.length;i++){
        if(obj[array[i]]){
            obj[array[i]]++
        }
        else
        {
            obj[array[i]] = 1
        }
    }
 for(let key of obj){
    if(obj[key]===1){
      return key
    }
 }
}