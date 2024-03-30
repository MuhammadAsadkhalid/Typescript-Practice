"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const user = new Person("Angela", "Davis", 26);
console.log(user.getFullName()); // Output: Angela Davis
