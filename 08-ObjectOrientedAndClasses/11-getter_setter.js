//to not let someone ee password or give encryted password ,there we use getter or setter

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    //you have to make the get ,set with the same name of proper
    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}hitesh`;
        //we use _password not password as both constructor and setter races each other to set the p[assword which overflow call stack]
    }

    set password(value) {
        this._password = value;
    }
}

const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email);
