let myName = "hitesh     ";

// console.log(myName.length, "LINE 3");

/************************************************************************* */

function multipleBy5(num) {
    return num * 5;
}

multipleBy5.power = 2; //are we able to use dot access with function so is it object

// console.log(multipleBy5(5)); //=>25
// console.log(multipleBy5.power); //=>2
// console.log(multipleBy5.prototype); //=>{} it contains the reference of this keyword in function and prototype properties

/**************************** Add a functionality  ********************************************* */

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
};
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score} line 28`);
};

//new keyword injects the function defined above
const chai = new createUser("chai", 25); //function se value transfer krli to chai variable, par batana padega new properties by new
const tea = createUser("tea", 250);

// chai.printMe();

/************************** Prototype *********************************************** */

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    },
};

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all objects`);
};

Array.prototype.heyHitesh = function () {
    console.log(`Hitesh says hello`);
};

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

/***********  inheritance *******************************************/

const User = {
    name: "chai",
    email: "chai@google.com",
};

const Teacher = {
    makeVideo: true,
};

const TeachingSupport = {
    isAvailable: false,
};

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

/********************** modern syntax *******************************************************************************************************************************************************************************/
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();
