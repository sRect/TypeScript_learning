"use strict";
function greeter2(person) {
    var age = person.age, name = person.name;
    return "my name is " + name + ", I'm " + age + " years old";
}
var user2 = {
    age: 18,
    name: "pi"
};
console.log(greeter2(user2));
