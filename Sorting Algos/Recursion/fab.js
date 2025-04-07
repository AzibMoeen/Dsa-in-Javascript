 

 const fab =(n) => {
    if(n <= 1) return n;
    return fab(n-1) + fab(n-2);
 }

 console.log(fab(10)) // 55


 //without recursion

 const fab2 = (n) => {
    if(n <=3){
        return n
    }
        let a = 0;
        let b = 1;
        let c = 0;
        for(let i = 0; i <= n-1; i++){
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
    console.log(fab2(10)) //55

function isPalindrome(number,palindrom=0){
    if(number==0){
      return palindrom
    }
    let  x = number%10
    palindrom = (palindrom*10)+x
    return isPalindrome(Math.floor(number/10), palindrom)
    
}
console.log(isPalindrome(133, 0)) 


function bubblesort(array,n=array.length){
    
    if(n==0||n==1){
        return array
    }
    for (let j = 0 ; j < n-1; j++) {
        if(array[j]>array[j+1]){
            [array[j],array[j+1]]=[array[j+1],array[j]]
        }
    }
    return bubblesort(array,n-1)
}

console.log(bubblesort([9,0,8,0,4,5,6,7],8))


function reverseStringRecursive(string, a = 0, b = string.length - 1) {
    let s = string.split('');
    if (a >= b) {
        console.log(s.join(''));
        return;
    }
    swap(a, b, s);
    reverseStringRecursive(s.join(''), a + 1, b - 1);
}

reverseStringRecursive("hello");


function checkPalindrome(string, a = 0, b = string.length - 1) {
    if (a >= b) {
        return 
    }
    if (string[a] !== string[b]) {
        return false;
    }
    return checkPalindrome(string, a + 1, b - 1);
} 

function FindMid(arr) {
    let i = 0
    let j = 0
    while(arr[i]!==undefined){
        i++
        j = j + 2
    }
    return i
}
let array = [1,{a:()=>{
    console.log('hello')
    return 2
}},3,4]
console.log(typeof array[[1]].a())
console.log(FindMid([1,2,3,4,5,6,7,8,9,10])) //5


function your(a,b,func){
    func(a,b)
}

function my(a,b){
   let sum = a+b
   console.log(sum)
   return sum
}


your(4,5,my)

function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mul(a,b){

    return a*b
}

function div(a,b){
    return a/b
}

function calculator(a,b,callback){
    return callback(a,b)
}

console.log(calculator(10,5,add)) //15
console.log(calculator(10,5,sub)) //5
console.log(calculator(10,5,mul)) //50
console.log(calculator(10,5,div)) //2



function fetchData(callback){
    console.log("fetching data")
    setTimeout(()=>{
        const data = {name:'john', age:30}
        callback(data)
    },2000)
}

function displayData(data) {
    console.log("Data received:", data.name, data.age);
}

fetchData(displayData)


function promise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },2000)
    })
}

async function someTask(){
    console.log('task started')
    await promise()
    console.log('task ended')
}

someTask()

function fetchData(error,callbacl){
    
    setTimeout(()=>{
      if(error>0.5){
        
            callbacl('error',null)
        }
        else{
            const data = {name:'john', age:30}
            callbacl(null,data)
        }
    },2000) 
}

    function handleResponse(error, data) {
        if (error) {
            console.log("Error:", error);
        } else {
            console.log("Success:", data);
        }
    }

let error = Math.random() > 0.5
fetchData(error,handleResponse)

const vowoels = ['a','e','i','o','u']

function countVowels(string){
    let count = 0
    for(let i = 0; i < string.length; i++){
        if(vowoels.includes(string[i])){
            count++
        }
    }
    return count
}

const string = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o']

const next = string.filter((item)=>vowoels.includes(item))
console.log(next)

// UpperCase fist letter of each word
const words = "hello world"
const h = words.split(' ')
const newString = h.map((item)=>item[0].toUpperCase()+item.slice(1))
console.log(newString.join(' '))

// Remove duplicate from array  

const array = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
// const array1 = array.sort((a,b)=>a-b)

function removeDuplicate(array,val){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        if(array[i] !== val){
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(removeDuplicate(array,4))

function removeDuplicate(array){
    let j = 0
    for(let i = 1; i < array.length; i++){
        if(array[j] !== array[i]){ 
           j++
           array[j] = array[i]
        }
    }
    return array.slice(0,j+1)
}

console.log(removeDuplicate(array1))

function removeDuplicate(array){
    let j = 0
    for (let i = 0; i < array.length; i++) {
        if(array[j] !== array[i]){
            j++
            array[j] = array[i]
        }
            
        
        
    }
    return array.slice(0,j+1)   
}
console.log(removeDuplicate([1,1,2,2,3,4,5,5,6,6,7,7,8,8])) 

function removeElement(array,val){
    let j = 0
    for(let i = 1; i < array.length; i++){
        if(array[i] !== val){
            array[j] = array[i]
            j++
        }
    }
    return array
}


console.log(removeElement([1,2,3,4,5,6,7,8,9,10],5))
