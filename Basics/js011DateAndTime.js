// Dates

let myDate = new Date(); //it is type = object
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)//month starts with 0 in js
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")//in this format it will not take 0 month
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);//gives in millisecond
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));//convert into seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); //starts from 0
console.log(newDate.getDay());

newDate.toLocaleString("default", { weekday: "long" });

//batics is used for string interpolation  `${newDate.getDay()} and the time `
