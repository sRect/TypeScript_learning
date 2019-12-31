"use strict";
// 1.boolean
var a = true;
console.log("boolean", a);
// 2.string
var b = "str";
console.log("string", b);
// 3.number
var c = 1;
console.log("number", c);
// 4.array
var d = [1, 2];
// let e: Array<number | string> = [1, "str"];
var e = ["str", 1];
console.log("array", d, e);
// 5.tuple
var f;
f = ["str", false];
// f = [false, "str"] // err
console.log("tuple", f);
console.log("tuple", f[1]);
// 6.enum
// 默认情况下，从 0 开始为元素编号。
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var g = Color.Red;
console.log("g", g); // 0
// 手动更改索引
var Phone;
(function (Phone) {
    Phone[Phone["iPhone"] = 1] = "iPhone";
    Phone[Phone["xiaomi"] = 2] = "xiaomi";
    Phone[Phone["huawei"] = 3] = "huawei";
})(Phone || (Phone = {}));
var h = Phone.huawei;
console.log("h", h); // 3
// 反向查找
var i = Phone[2];
console.log("i", i); // xiaomi
// 7.any
var j = 123;
j = false;
console.log("j", j);
var k = [1, "str", null, false, undefined];
// 8.void
function msg() {
    console.log("void msg");
}
// 9.null
var l = null;
// 10.undefined
var m = undefined;
// 11.never
//返回never的函数必须存在无法到达终点
function error(msg) {
    throw new Error(msg);
}
// 推断的返回值类型为never
function fail() {
    return error("something fail");
}
// 返回never的函数必须存在无法到达终点
function infiniteLoop() {
    while (true) {
    }
}
create([1, 2, 3]);
create({ a: 1 });
// create(false) // err
// 类型断言
// 告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 
var someVal = "str";
var strLength = someVal.length;
// 或者
var someVal2 = 123.98;
var numLength = someVal2.toFixed(1);
