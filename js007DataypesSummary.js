//they are carectorized on how it is stored in memory and acces them is primitive and non-primitive(referencr types)

//  Primitive - call by value - original reference is not given, it is given after copying and copy is changed

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
let userEmai = undefined;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); //=>false

// const bigNumber = 3456543576654356754n //n lagage manually big int hogya warna js apneapp hi bigint leleta hai

// Reference (Non primitive) - reference in mem is given directly

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
};

const myFunction = function () {
    console.log("Hello world");
};

console.log(typeof anotherId);

/* JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:*/
