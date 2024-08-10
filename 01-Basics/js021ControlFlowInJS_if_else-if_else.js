/**************************control flow or logic flow********************************** */

//var is completely global

// if
const isUserloggedIn = true;
const temperature = 41;

if (temperature === 40) {
    // console.log("less than 50");
} else {
    // console.log("temperature is greater than 50");
}

// console.log("Execute");

// <, >, <=, >=, ==, !=, === also check type, !==
//= is asignment operator

const score = 200;

if (score > 100) {
    let power = "fly";
    // console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);

/* *shorthand notation* */

const balance = 1000;

//implicit scope write in one line after writing , you can enter and write in next line but not recommended
if (balance > 500) console.log("test line 33"), console.log("test2");

//nesting
if (balance < 500) {
    // console.log("less than 500");
} else if (balance < 750) {
    // console.log("less than 750");
} else if (balance < 900) {
    // console.log("less than 750");
} else {
    // console.log("less than 1200");
}

/* * multiple condition check * */

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

//  && =>and
//  ||=>or

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
