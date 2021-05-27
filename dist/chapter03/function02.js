"use strict";
// 可选参数必须接在必需参数后面
function getName(firstName, lastName) {
    if (lastName)
        return firstName + lastName;
    return firstName;
}
var str1 = getName("a", "b");
var str2 = getName("a");
// 默认参数
function getName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'hello'; }
    if (lastName)
        return firstName + lastName;
    return firstName;
}
var str3 = getName2("a", "b");
var str4 = getName2("a");
console.log(str3);
console.log(str4);
function getName3(firstName, lastName) {
    if (firstName === void 0) { firstName = "hello"; }
    return firstName + lastName;
}
var str5 = getName3("a", "b");
var str6 = getName3(undefined, 'b');
console.log(str5);
console.log(str6);
function log(x) {
    if (x === void 0) { x = 'hello'; }
    console.log(x);
}
log(); //'hello'
log('hi'); //'hi'
// log(1); // Argument of type '1' is not assignable to parameter of type 'string | undefined'.ts(2345)
// 剩余参数
function handlePush(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    args.forEach(function (arg) { return arr.push(arg); });
}
var arr = [];
handlePush(arr, 1, 2, true);
console.log(arr);
// 函数重载
function handleReverse(x) {
    if (typeof x === 'number')
        return Number(x.toString().split('').reverse().join(''));
    return x.split("").reverse().join("");
}
console.log(handleReverse(123));
console.log(handleReverse('abc'));
function handleReverse2(x) {
    if (typeof x === "number")
        return Number(x.toString().split("").reverse().join(""));
    return x.split("").reverse().join("");
}
console.log(handleReverse2(1234));
console.log(handleReverse2("abcd"));
