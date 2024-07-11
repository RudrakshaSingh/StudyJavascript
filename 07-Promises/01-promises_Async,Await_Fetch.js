//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/*
A Promise is in one of these states:

pending  :   initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected :  meaning that the operation failed.
*/

//promise can be accepted with async await also
//but async await cannot directly handle error therefore use try catch

/*********************** Making promise *********************************************** */

const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        // console.log("Async task is compelete. line 17");
        resolve(); //after this only .then will connect to promise
    }, 1000);
});

/******************** Consumption of a promise ************************************************** */

//callback function . it recieve a argument automatically from resolve
promiseOne.then(function () {
    console.log("Promise consumed");
});

/********************* Doing both thing together ************************************************* */

new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    // console.log("Async 2 resolved/consumed. line 37");
});

/********************* second promise ************************************************* */

const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" });
    }, 1000);
});

promiseTwo.then(function (user) {
    // console.log(user, " Line49");
});

/********************* third promise ************************************************* */

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "hitesh", password: "123" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promiseThree
    .then((user) => {
        // console.log(user, "line67");
        return user.username; //gives to next then
    })
    .then((username) => {
        // console.log(username, "line71");
    })
    .catch(function (error) {
        // console.log(error, "line74");
    })
    .finally(() => console.log("The promise is either resolved or rejected"));

/********************* four promise ************************************************* */

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000);
});

async function consumePromiseFour() {
    try {
        const response = await promiseFour;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFour();

/********************************************************************** */

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         //imp
//         const data = await response.json(); //to convert to json also take time so put await or the code will not work
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers();

/******************************* same as above *************************************** */

fetch("https://api.github.com/users/hiteshchoudhary")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.
