

function bank(){
    let balance = 0;

    return{
        deposit: function(amount){
            balance += amount;
            console.log(`Deposited: ${amount}`);
        },
        getBalance: function() {
            return balance;
        },
        withdraw: function(amount) {
            if(amount > balance) {
                console.log("Insufficient funds");
            }
            else {
                balance -= amount;
                console.log(`Withdrawn: ${amount}`);
            }
        }
    }
}

const myBank = bank();

myBank.deposit(1000); // Deposited: 1000
console.log(myBank.getBalance()); // 1000
myBank.withdraw(500); // Withdrawn: 500
console.log(myBank.getBalance()); // 500