const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
    // console.log(item);
    return item;
});

// console.log(values);//=>undefined -even with return or console
//so we get to know for each does not return any value

/************** Filter - Returns the elements of an array that meet the condition specified in a callback function. ************************************************************* */
//take callback and also returns value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums1 = myNums.filter((num) => {
    return num > 4; //condition
});

console.log(newNums1, " :line 20"); //=>[ 5, 6, 7, 8, 9, 10 ] else empty array if no return condition

/************ same thing with for each ********************************************************* */

const newNums = [];

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
});

console.log(newNums, " :line 32");

/******************************************************************************** */

const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
    { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
    { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
    { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
    { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
    { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History"); //implicit return

userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks, " :line 53");
