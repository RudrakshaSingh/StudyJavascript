const name = "hitesh";
const repoCount = 50;

//bad syntax we use bactics
// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

/*another method to declare string //it is a object {index,value}*/
const gameName = new String("hitesh-hc-com");

// console.log(gameName[0]);//=>give h
// console.log(gameName.__proto__);//to acess prototype=>give {}

//these below does not change original value due to stack mem
console.log(gameName.length); //=>8
console.log(gameName.toUpperCase()); //=>HITESH-HC-COM
console.log(gameName.charAt(2)); //=>t
console.log(gameName.indexOf("t")); //=>2

const newString = gameName.substring(0, 4);
console.log(newString); //=>hite

const anotherString = gameName.slice(-2, 4);
console.log(anotherString); //forget it

const newStringOne = "   hitesh    ";
console.log(newStringOne, "hi");
console.log(newStringOne.trim(), "hi"); //remove space from both sides

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar")); //=>true

console.log(gameName.split("-")); //convert to array when - is there
