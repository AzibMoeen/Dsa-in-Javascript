  

  const palindrome = (number)=>{
      let x
      let palindrom
      while(number!=0){
        x = number%10
        palindrom = (palindrom*10)+x
        number = number/10
      }
      return palindrom
  }


  

console.log(palindrome(113))
