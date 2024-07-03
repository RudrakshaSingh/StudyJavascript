/**************** FOR IN LOOP ***************************************************** */

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
};

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

/**************** FOR IN LOOP for array ***************************************************** */

const programming = ["js", "rb", "py", "java", "cpp"];

//take keys as indexing
for (const key in programming) {
    //console.log(programming[key]);
}

/**************** map is not iteratable with for in ***************************************************** */

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
