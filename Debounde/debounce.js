function debounce(func, delay) {
    let timeOUt

    return function(...args){
        if(timeOUt){
            clearTimeout(timeOUt)
        }
        timeOUt = setTimeout(() =>{
            func.apply(this,args)
        }, delay)
    }
}



function throttle(func, delay) {
  let throttle = false
  return function(...args) {
    if(!throttle){
        throttle = true
        setTimeout(() => {
            func.apply(this, args)
            throttle = false
        })
    }
  }

}