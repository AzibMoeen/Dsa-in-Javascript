/**
 * @param {Function} fn
 * @param {number} t 
 * @return {Function}
 */
var debounce = function(fn, t) {
     let id = null
     let outerArgs = []
    function execute(){
        fn(...outerArgs)
        id = null
    }
    return function(...args) {
       if(id!==null){
           clearTimeout(id)
       }  
         outerArgs = args
         id = setTimeout(execute,t)
    }
};


  const log = debounce(console.log, 100);
  log('Hello'); // cancelled
  log('Hello'); // cancelled
  log('Hello'); // Logged at t=100ms
 

  console.log("hello world","hello world",10)
 
  