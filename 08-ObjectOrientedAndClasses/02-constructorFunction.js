//new is a constructor function to make multile instance from 1 object literal

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    };

    // return this;
    //object is passed on
    //you dont have to write it it is passed even without it
}

const userOne = new User("hitesh", 12, true); //if you dont use new it will overwrite the previous data
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne.constructor);
console.log(userTwo);
