//mEMORY IS OF 2 TYPES

//Stack mem - primitive type datatype - copy of variable
//heap mem - non pritive - reference oforiginal value

let name = "dcndeicu"; //stack

let anotherName = name;
console.log(anotherName);

anotherName = " UIIDF";

console.log(anotherName);
console.log(name);
//both has differnt value as stack creates a copy on top of stack so copy variable change not original

let myObj = {
    name: "hitesh",
    age: 22,
};
let myObj2 = myObj;

myObj2.age = 33;

console.log(myObj);
console.log(myObj2);
// both value has c hanges as reference to heap mem is given to both variables
