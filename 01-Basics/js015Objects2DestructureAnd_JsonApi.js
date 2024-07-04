// const tinderUser = new Object()  //singleton object
const tinderUser = {}; //non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary",
        },
    },
};

// console.log(regularUser.fullname.userfullname.firstname);
//agar fullname mile tab ye karo
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 } //object ke andar object
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{} is target is optional but it is good and obj1 and 2 are source
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 1, email: "h@gmail.com" },
    { id: 1, email: "h@gmail.com" },
];

users[1].email; //as object inside array
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //give array of keys
// console.log(Object.values(tinderUser)); //give array of values
// console.log(Object.entries(tinderUser)); //give array of array of key and value

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

/* ********************************************************************** */

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
};

// course.courseInstructor

// const { courseInstructor } = course;

//renaming.result will be name
const { courseInstructor: instructor } = course; //konsi value extract karni haI = kaha se karni hai

// console.log(courseInstructor);
console.log(instructor);

//this is json structure
/*
 {
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
 } 
*/

[{}, {}, {}];
