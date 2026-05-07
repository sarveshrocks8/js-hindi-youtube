// Immediately Invoked Function Expressions (IIFE)
//most of the there aree pollution in global scope variables -> so to protect from this pollution we use iife function which executes immediately 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

