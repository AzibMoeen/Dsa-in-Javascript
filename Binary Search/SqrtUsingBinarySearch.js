

function th(x){
    let a = 0
    let b = x
    let ans = -1
     let mid = (a+b)/2
     while(a<b){
         let square = mid*mid
         if(square==x){
             console.log(mid)
             return mid
            
         }
         else if(mid*mid<x){
         
             
             a=mid+1
         }
         else{
             b=mid-1 
         }
         mid = (a+b)/2
     }
     return mid
 }
function sqrt(){
    console.log(th(8))
}
sqrt()