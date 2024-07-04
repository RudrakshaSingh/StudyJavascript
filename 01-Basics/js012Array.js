// array
//in js,array are resizable and of mix types
//zero based indexing
//when doing copy operation in array it make shallow copy(it points to same reference unlike deep copy)

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)//insert at start but it shifts all element by 1 take loads
// myArr.shift()

// console.log(myArr.includes(9));//give false
// console.log(myArr.indexOf(3));//-1 if not there edlase tells index

// const newArr = myArr.join()//adds allelements of array into string with comma seperarted

// console.log(myArr);
// console.log( newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); //returns a copy of section of array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); //also include 3 and also cuts the array of original elents
console.log("C ", myArr);
console.log(myn2);
