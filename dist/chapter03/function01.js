"use strict";
// 函数声明
function sum(x, y) {
    return x + y;
}
// 函数表达式
var sum2 = function (x, y) {
    return x + y;
};
// void 类型来表示函数没有返回值
var sum3 = function (x, y) {
    console.log(x + y);
};
sum3(1, 2);
// 函数类型先声明，再定义
var add;
add = function (x, y) {
    return x + y;
};
add(1, 2);
// 函数类型声明+箭头函数
var add2 = function (x, y) {
    return x + y;
};
var add3 = function (x, y) { return x + y; };
var add4 = function (x, y) { return x + y; };
// 可缺省和可推断的返回值类型
function computeType(a, b) {
    var booleanArr = [a];
    var strArr = [b];
    return {
        booleanArr: booleanArr,
        strArr: strArr,
    };
    // 返回  {
    //     booleanArr: boolean[];
    //     strArr: string[];
    // }
}
