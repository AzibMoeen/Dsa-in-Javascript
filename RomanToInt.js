    /**
    * @param {string} s
    * @return {number}
    */
    var romanToInt = function(s) {
        const obj = {
        I : 1,
        V : 5,
        X : 10,
        L :50,
        C :100,
        D :500,
        M:1000

    }  
        const array = s.split('')
        let result = 0
        for(let i = 0;i<array.length;i++){
            if(i+1<array.length&&obj[array[i]]<obj[array[i+1]]){
                result = result - obj[array[i]]
            }
            else{
                result = result + obj[array[i]]
            }
        }
   return result
    };