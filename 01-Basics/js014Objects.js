// singleton-throgh constructor . when created through literal it is not singleton
//Objects can be declared in two ways

//1. Object.create   - constructor method
//2. object literals   -like literal

//by deafault the key is taken as string you dont have to put quotes

const mySym = Symbol("key1");

//this is object literal
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", //you cannot access this with . dot method bcaz of space and quotes
    [mySym]: "mykey1", //symbol as a key cannot be devlare as key directly in object you have to put sqaure brackets
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email) //Accessing
// console.log(JsUser["email"]) //other method of accesing put key as string
// console.log(JsUser["full name"]) // square notation
// console.log(JsUser[mySym]) // cannoot be taken with dot
// console.log(typeof JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"; //changing ,overwriting
// Object.freeze(JsUser) // for locking value so they cannot be changed
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
};

//name of object is to be referenced
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting); //=>undefined

console.log(JsUser.greeting()); //give give error if the object is freezed
console.log(JsUser.greetingTwo());

//in js function can be treated a svariables
