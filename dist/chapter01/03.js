"use strict";
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return User;
}());
function greeter3(person) {
    var firstName = person.firstName, lastName = person.lastName;
    return "My name is " + firstName + lastName;
}
var user3 = new User('pi', 'er');
console.log(greeter3(user3));
