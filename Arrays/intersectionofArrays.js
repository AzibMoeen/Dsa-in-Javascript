let arr = [23,56,76,88,67]
let arr2 = [1,23,76,100,200]


let i = 0
let j = 0
let arr3=[]
const intersect = (arr,arr2)=>{
while(i<arr.length&&j<arr2.length){
    if(arr[i]==arr2[j]){
        arr3.push(arr[i])
    i++
    j++
    }
    else if(arr[i]<arr2[j]){
        i++
    }
    else{
    
        j++
    }
}
return arr3
}

console.log(intersect(arr,arr2))


//
let arr4=[]

const intersect2 = (arr,arr2)=>{
    arr.map((item)=>{
        arr2.map((item2)=>{
            if(item===item2){
                arr4.push(item)
            }
        })
       
    })
    return arr3
    }
    console.log(intersect2(arr,arr2))

    
let arr5 = []
const intersect3 = (arr,arr2)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr[i]<arr[j]) break
              if(arr[i]===arr2[j]){
                    arr5.push(arr[i])
                    arr2[j]=-1
                    break
                }
        }
    }   
    return arr5
}

console.log(intersect3(arr,arr2))


//approach 4

let arr6 = [];

const intersect4 = (arr, arr2) => {
    const set = new Set(arr);
    arr2.forEach(item => {
        if (set.has(item)) {
            arr6.push(item);
            set.delete(item);
        }
    });
    return arr6;
}

console.log(intersect4(arr, arr2));

