

function sort(arr){

   let a = 0
   let b= arr.length-1
   while(a<b){
    if(arr[a]==0){
        a++
    }else if(arr[b]==1){
        b--
    }
    else{
         swap(a,b,arr)
    }
   }
   return arr


}


function swap(a,b,arr){
    [arr[a],arr[b]]=[arr[b],arr[a]]
    }
    
    console.log(sort([1,0,0,1,1]))