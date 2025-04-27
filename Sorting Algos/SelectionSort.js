    
function sort(array){
   
    for (let i = 0; i < array.length; i++) {
        let index = i
        for (let j = i+1; j < array.length; j++) {
              if(array[index]>array[j]){
                index = j
              } 
        }
        swap(index,i,array)
        
    }
    return array



}
function swap(i,index,arr){
    [arr[i],arr[index]]=[arr[index],arr[i]]
}
console.log(sort([9,0,8,0,4,5,6,7]))





function selectionSort(array) {

    for(let i = 0; i < array.length; i++){
        let index = i
        for(let j = i+1; j <array.length; j++){
            if(array[index] > array[j]){
                index = j
            }   
            swap(index,j,array)
        }
    }
}


function insertionSort(array){
    for(let i = 1; i< array.length;i++){
        let key = array[i]
        let j = i-1
        while(j>=0&&array[j]>key){  
            array[j+1] = array[j]
            j--
        }
        array[j+1] = key
     }
}   