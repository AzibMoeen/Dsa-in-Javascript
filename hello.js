
// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// var dailyTemperatures = function(temperatures) {
//     let n = temperatures.length
//     let answer = new Array(n).fill(0)

//     let stack = []

//     for(let i = 0;i<n;i++){

//         while(stack.length>0&&temperatures[stack[stack.length-1]]<temperatures[i]){
//         const prevIndex = stack.pop()
//         const answe = i - prevIndex
//         answer[prevIndex] = answe
//     }

//     stack.push(i)
// }
// return answer
// }
// // const time = new Date().getTime();
// const temperatures1 = [73, 74, 75, 71, 69, 72, 76, 73];
// console.log(dailyTemperatures(temperatures1)); 
    
// const temperatures2 = [30, 40, 50, 60];
// console.log(dailyTemperatures(temperatures2));

// const temperatures3 = [30, 60, 90];
// console.log(dailyTemperatures(temperatures3)); 
// const time2 = new Date().getTime();

// // const timeTaken = time2 - time;
// console.log('Time taken is: ', timeTaken);





// // let a = 15
// // a = 10
// // console.log(a)
// // let b = "string"


// // console.log(typeof(a))
// // console.log(typeof(b))


// // const c = 13
// // c = 10
// // console.log(c)

// // var d = 10

// // a = 10

// // if(a>9){
// //     var b = 10
// // }
// // console.log(b)

// // const raza = ()=>{
// //     console.log("raza") 
// // }

// // raza()

// // function raza(){
// // console.log("raza")
// // }

// // raza()

// // let a = 10
// // let b = 20

// // function raza(a,b){
// //     let c = a+b
// //     return c
// // }

// // console.log(raza(a,b))


// let array = [1,3,45,7,5]



// // for (const element of array) {
// //     console.log(element)
// // }

// // while(true){
// //     console.log("hello")
// //     break

// const hell = array.map((item)=>{
//     return item*3})

// console.log(hell)







const removeDuplicate = (arr) => {
let j = 0
for(let i = 0;i<arr.length;i++){
    if(arr[i]!==arr[j]){
        j++
        arr[j] = arr[i]
    }

    
}
return arr.slice(0, j + 1);
}

console.log(removeDuplicate([1,2,3,4,5,6,6,8,8,8,8,8,6,7,8,9,10]))