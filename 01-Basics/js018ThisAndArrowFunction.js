//this keyword --current context(values what variable hold ,kiske bare me baat ho rhi hai)-- ke bare me batata hai
//arrow func ke andar this nhi hota

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //print full object
    },
};

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //refer to empty object only in node envi, in browser it give window{}
//in browser most global object is window{} object

/* *************************************************************** */

function chai1() {
    let username = "hitesh";
    console.log(this.username); //=>undefined,this cannot be used in function,used in object only
    // console.log(this); //this give many different value
}

// chai1();

const chai2 = function () {
    let username = "hitesh";
    console.log(this.username); //=>also give undefined
};

/* ************************Arrow function************************ */

const chai3 = () => {
    let username = "hitesh";
    console.log(this); //=>{}
    console.log(this.username); //=>also give undefined
};

// chai3()

const addTwo1 = (num1, num2) => {
    return num1 + num2; //explicit return
};

//Implicit return - dont have to write return without curly and in 1 line
const addTwo2 = (num1, num2) => num1 + num2;

//to return a object you have to wrap in paraenthesis
const addTwo3 = (num1, num2) => ({ username: "hitesh" });

// console.log(addTwo(3, 4));
// console.log(addTwo3(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
