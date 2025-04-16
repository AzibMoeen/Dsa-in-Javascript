/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let minPrice = 1000000
    let max = 0
    for(let price of prices){
        if(price<minPrice){
              minPrice = price
        }else{
           let potentialProfit = price-minPrice
           if(potentialProfit>max){
           max = potentialProfit
           }
        }
    }
    return max
};



function maxProfit(prices){
let minPrice = 10000
let max = 0
for(let price of prices){
    if(price<minPrice)
    {
        minPrice = price
    }else{
        let potentialProfit = price-minPrice
        if(potentialProfit>max)
            max = potentialProfit
    }
}
return max
}

console.log(maxProfit([10,20,300,600,700]))