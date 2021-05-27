"use strict";
var xiaoming = {
    name: 'xiaoming',
    age: 18,
    gender: 'man'
};
console.log(xiaoming);
var Human = /** @class */ (function () {
    function Human(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
    Human.prototype.sayHello = function () {
        console.log("hello everyone");
    };
    Human.prototype.sayName = function () {
        console.log("name: " + this.name);
    };
    Human.prototype.sayAge = function () {
        console.log("age: " + this.age);
    };
    return Human;
}());
var human = new Human('jack', 100);
human.sayHello();
human.sayName();
human.sayAge();
