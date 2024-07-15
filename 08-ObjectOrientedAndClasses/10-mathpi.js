const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);//=>writable:false

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("chai nhi bni");
    },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name")); //of name property

Object.defineProperty(chai, "name", {
    writable: false, //making object unchangebkle
    enumerable: true, //make it not iterabel,cannot do loop
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    //enteries-to iterates over enteries

    //but this giver method also but we need only key:value paie
    //therefore check ifelse
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}
