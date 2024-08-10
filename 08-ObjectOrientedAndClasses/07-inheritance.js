class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username); //you dont have to use .call use super and it will extend to user and access here
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.logMe();

const masalaChai = new User("masalaChai");
masalaChai.logMe();

console.log(chai instanceof User);
