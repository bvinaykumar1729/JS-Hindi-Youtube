// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    console.log(`DB CONNECTED`);
    // named IIFE
})();

((name)=>{
    console.log(`DB CONNNECTED TWO ${name}`);
})('hitesh')