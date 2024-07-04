// {}=>this is scope just not in object declaration
// global scope through inspect in browser is different in node(code environment)

var c = 300;
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;

    // console.log("INNER: ", a);
}

// console.log(a);  //gives 300
// console.log(b); //gives error as not declared globallty
// console.log(c); //this gives value 30 that is wrong as c is local scope declared with var

/* ******************************************************** */

//child function can access parent variable
function one() {
    const username = "rudra";

    //local scope inside local scope
    function two() {
        const website = "youtube";
        console.log(username); //this is global scpe for usename
    }
    // console.log(website); //this is local scpe for website so cannot be used

    two();
}

// one() //calling the function

if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);  //cannot be accessed
}

// console.log(username); //cannot be accessed

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)); //it works,above declaration of function

function addone(num) {
    return num + 1;
}

addTwo(5); //error,//above declaration of function due to hoisting and execution context due to variable
//this is expression function
const addTwo = function (num) {
    return num + 2;
};
