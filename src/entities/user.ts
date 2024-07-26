export class User {
    _id?: string;
    _name: string;
    _email: string;
    _password: string;

    constructor(name: string, email: string, password: string) {
        this._name = name;
        this._email = email;
        this._password = password;
    }

    get id(): string | undefined {
        return this._id;
    }
    set id(value: string) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    get email(): string {
        return this._email;
    }
    set email(value: string) {
        this._email = value;
    }
    is_password_valid(password: string) {
        return this._password === password;
    }
}