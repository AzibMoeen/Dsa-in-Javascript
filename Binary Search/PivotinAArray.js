  


function Pivot(arr){
     
     let a = 0
     let b = arr.length-1
     let mid = Math.floor((a+b)/2)
     while(a<b){
        if(arr[mid]>=arr[0]){
            a = mid+1
        }else{

            b = mid
        }
        mid = Math.floor((a+b)/2)
     }
     return [arr[a],a]
}

console.log(Pivot([4,5,6,7,8,1,2]))