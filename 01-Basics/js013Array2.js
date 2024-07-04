const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)//creates a array inside a array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //merge the arrays-combines 2 array to give a single array-returns new array
// console.log(allHeros);

/*but for actual we use spread*/
const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

//we give number as depth in it
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh")); //false
console.log(Array.from("Hitesh")); //creates a array eith each elents of hitesh
console.log(Array.from({ name: "hitesh" })); // interesting
//give empty array it is not able to convert it a array directly

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.
