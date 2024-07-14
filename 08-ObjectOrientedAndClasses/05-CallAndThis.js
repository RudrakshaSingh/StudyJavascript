function SetUsername(username) {
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    //use it like this else this will not work inside function
    //after completion usename vanishes like other variables
    //to get to outer function,hold the rerence we use .call
    //so you get all declared variables we need to give execution context
    //add this thid give the ,pass the this with .call to use this of outer function
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
