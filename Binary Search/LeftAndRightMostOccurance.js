

function leftAndRightMostOccurance(arr, x) {
    let left = -1;
    let right = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            left = i;
            break;
        }
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === x) {
            right = i;
            break;
        }
    }
    return [left, right];
}

console.log(leftAndRightMostOccurance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 9)); //[8, 10]

//Solution 2 

 function index(arr,key){
    let ans = -1
    let a = 0
    let b = arr.length-1
  
    while(a<=b){
        let zz= Math.floor((a+b)/2)
        if(arr[mid]==key){
            ans = mid
            a=mid+1
        }
        else if(arr[mid]<key){
            a=mid+1
        }
        else{
            b=mid-1
        }

    }
     return ans


 }
 console.log(index([0,3,3,5,5,6,6],5))

 //Using for loop

    function index(arr,key){
        let ans = -1
        let a = 0
        let b = arr.length-1
      
        for(let i = 0;i<arr.length;i++){
            if(arr[i]==key){
                ans = i
            }
        }
         return ans
      
      
     }
