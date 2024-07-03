// for of

// ["", "", ""]
// [{}, {}, {}]

/**************** FOR OF LOOP ***************************************************** */
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

/**************** Maps-similar to array-it is a object in itself like everything in js***************************************************** */
//it is an object that holds key-value pair and remember the original insertion order of keys.
//any value(both object and primitive) may be used as a key or value
//it has unique value and no duplicate

const map = new Map();
map.set("IN", "India"); // how to set values
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");
map.set("IN", "India"); // will not insert and will not give error

// console.log(map);

//destructure of arraay
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

for (const key of map) {
    // console.log(key);//give array of key and value
}

/**************** FOR OF LOOP in object -give error ***************************************************** */

const myObject = {
    game1: "NFS",
    game2: "Spiderman",
};

//not iterable this way
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);

// }
