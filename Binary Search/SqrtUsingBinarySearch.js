function sqrt(x){
    let a = 0
    let b = x

    while(a<b){
        let mid = Math.floor((a+b)/2)

        let square = mid*mid
        if(square==x){
            return mid
        }
        else if(square<x){
            ans = mid
            a = mid + 1
        }
        else{
            b = mid - 1
        }
    }
    return ans
}

console.log(sqrt(25))