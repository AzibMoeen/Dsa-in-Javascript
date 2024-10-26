    
   function sort(arr){
       for(let i = 0;i<arr.length-1;i++){
        let index = i
        for(let j = i+1;j<arr.length;j++){
            if(arr[index]>arr[j]){
                index = j
            }
        }
        swap(i,index,arr)
       }
return arr
   }
function swap(i,index,arr){
    [arr[i],arr[index]]=[arr[index],arr[i]]
}
console.log(sort([9,0,8,0,4,5,6,7]))