
function Peak(arr){
    let a = 0
    let b = arr.length-1
    let mid = Math.floor((a+b)/2)
    while(a<b){
        
    
        if(arr[mid]<arr[mid+1]){
            a = mid+1
        }
        else{
            b = mid
        }
        mid = Math.floor((a+b)/2)
    }
    return a
}

    console.log(Peak([1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1])) //
