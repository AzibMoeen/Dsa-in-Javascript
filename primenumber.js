const number = 7;

const isPrime = (num) => {
    if(num <= 1) return false;


    for(let i = 2; i <= Math.sqrt(num); i++){ // Changed < to <=
        if(num % i === 0) return false;             
    }
    return true;
}

console.log(`Is ${number} a prime number? ${isPrime(number)}`); // Is 7 a prime number? true
console.log(`Is 4 a prime number? ${isPrime(4)}`); // Is 4 a prime number? false