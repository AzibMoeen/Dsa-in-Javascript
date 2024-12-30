  

  const palindrome = (number)=>{
          let x
          let palindrom
      while(number!=0){
        x = number%10
        palindrom = (palindrom*10)+x
        x = x/10
      }
      return palindrom
  }



