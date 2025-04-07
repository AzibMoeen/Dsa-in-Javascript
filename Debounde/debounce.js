function debounce(func,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this,args);
        },delay);
    }
} 

function throttle(func,delay){
    let throttle = false;
    return function(...args){
        if(!throttle){
            func.apply(this,args);
            throttle = true;
            setTimeout(()=>(throttle= false),delay);
        }
    }
}
