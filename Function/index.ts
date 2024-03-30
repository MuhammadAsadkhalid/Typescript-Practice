interface User {
    firstName: string;
    lastName: string;
    age: number;
}

class Person implements User {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const user = new Person("Angela", "Davis", 26);
console.log(user.getFullName()); // Output: Angela Davis