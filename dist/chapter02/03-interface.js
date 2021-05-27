"use strict";
;
function print2(arg) {
    console.log("a:" + arg.a + ", b:" + arg.b);
}
;
var myObj = { a: 123 };
print2(myObj);
var p1 = { x: 100, y: 100 };
// p1.x = 200 // Cannot assign to 'x' because it is a read-only property.ts(2540)
var fav = [true, false];
// fav.length = 0; // Cannot assign to 'length' because it is a read-only property.ts(2540)
// fav[0] = false; // 类型“readonly boolean[]”中的索引签名仅允许读取。ts(2542)
// fav.push(true); // 类型“readonly boolean[]”上不存在属性“push”。ts(2339)
fav = [false, true, false];
console.log(fav);
var re = [];
// 不能把ReadonlyArray赋值给普通数组
// re = fav; // he type 'readonly boolean[]' is 'readonly' and cannot be assigned to the mutable type 'boolean[]'.ts(4104)
// 但是可以通过类型断言重写
re = fav;
console.log(re);
function printSquare(conf) {
    console.log("color: " + (conf === null || conf === void 0 ? void 0 : conf.color) + ", width: " + (conf === null || conf === void 0 ? void 0 : conf.width));
}
printSquare({
    colour: 'red',
    width: 30
});
// conf 参数可以访问类型 CircleConf1 和 CircleConf2 所有属性
function getCircle(conf) {
    var color = conf.color || 'red';
    var radius = conf.radius || 40;
    conf.getArea = function () { return Math.PI * Math.pow(radius, 2); };
    // conf.color = 'red';
    // conf.radius = 30;
    // conf.getArea = ():number => Math.PI * Math.pow(conf.radius, 2);
    console.log("circle: area=>" + conf.getArea() + ", color: " + color);
}
;
getCircle({ radius: 40, getArea: function () { return 1; } });
