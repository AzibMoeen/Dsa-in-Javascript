
 function sort(array){
let swap = false;
for (let index = 0; index < array.length; index++) {
    for (let j = 0; j < array.length-1; j++) {
        if(array[j]>array[j+1]){
            [array[j],array[j+1]]=[array[j+1],array[j]]
            swap = true
        }
    }
    if(!swap){
        break
    }
}
return array
 }
console.log(sort([9,0,8,0,4,5,6,7]))