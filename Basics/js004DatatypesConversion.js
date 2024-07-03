let score = "33abc";
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // Nan - not a number -special type

//if score is null it covert it to 0 type number
//if score is undefined it covert it Nan type number
//if score is true bolean it covert it to 1 type number if false then 0

//"33"=>33
//"33abc"=>Nan number
//true=>1 number

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // give true
// "dki"=>true   ""=>false
//0=>false 1=>true

let Number = 33;
let StringNumber = String(Number);
console.log(StringNumber);
