// Immediately Invoked Function Expressions (IIFE)

//to function that execute immediately after its written
//to make the variables that are in global scope to not pollute the code so it makes its own scope
//to remove global variable pollution

//named IIfe
(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//simple/Unnamed iife
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
//in js iife dont know where to stop context so semicolon is impt at end of IIFE
