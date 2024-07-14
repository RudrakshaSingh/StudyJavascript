class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    //dont give access to user
    static createId() {
        return `123`;
    }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId())//=>error

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
// console.log(iphone.createId());//=>error
