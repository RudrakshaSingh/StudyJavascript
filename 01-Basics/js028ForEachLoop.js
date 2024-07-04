/**************** FOR IN LOOP-higher order function ***************************************************** */
//callback func =>does not have a name

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) {
    // console.log(val);
});

coding.forEach((item) => {
    // console.log(item);
});

/**************************************************** */

function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe); //can give print me as a variable- give reference not execute

/**************** FOR IN LOOP-item,index,arrayListFull ***************************************************** */

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

/************ iteration of Object inside Array S***************************************************** */

const myCoding = [
    { languageName: "javascript", languageFileName: "js" },
    { languageName: "java", languageFileName: "java" },
    { languageName: "python", languageFileName: "py" },
];

myCoding.forEach((item) => {
    console.log(item.languageName);
});
