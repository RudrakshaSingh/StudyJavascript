function sayMyName() {
    console.log("R");
    console.log("U");
    console.log("D");
    console.log("R");
    console.log("A");
    console.log("K");
}

// sayMyName(); //calling the function

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

//parameters
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2; //code after return does not execute
}

const result = addTwoNumbers(3, 5); //arguments
//they are 2 diff scope of result outside and inside the function

/* ********************************************************* */

//deafult value
function loginUserMessage(username = "sam") {
    // !username  is if false value(like empty string)
    if (!username) {
        console.log("PLease enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("rudy"))
// console.log(loginUserMessage()) //will give undefined just logged in if if condition was not written and deafult value was not given

/* ********************************************************* */

//if n number of parameters- use rest operator packing all element

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); //=>[ 500, 2000 ]

const user = {
    username: "hitesh",
    prices: 199,
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
