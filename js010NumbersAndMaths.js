const score = 400; //automatically number type
// console.log(score);//=>400

//exclusively number
const balance = new Number(100);
// console.log(balance);//=>[Number: 100]

// console.log(balance.toString().length); //=>3
// console.log(balance.toFixed(2)); //=>100.00  -for less precision value

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));//=>123.9 returns a string

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));//put commas acc to indian standard
// console.log(hundreds.toLocaleString());//put commas acc to Us standard by default

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); //it is a object with many methods
// console.log(Math.abs(-4)); //=>4 give +ve
// console.log(Math.round(4.6)); //=>5
// console.log(Math.ceil(4.2)); //=>5
// console.log(Math.floor(4.9)); //=>4
// console.log(Math.min(4, 3, 6, 8)); //=>3
// console.log(Math.max(4, 3, 6, 8)); //=>8

console.log(Math.random()); //between 0 to 1
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
