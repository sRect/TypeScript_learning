"use strict";
var SPerson = /** @class */ (function () {
    function SPerson(name, age) {
        this.name = name;
        this.age = age;
    }
    SPerson.prototype.say = function () {
        console.log("name: " + this.name + ", age: " + this.age);
    };
    return SPerson;
}());
var p = new SPerson("rose", 18);
p.say();
