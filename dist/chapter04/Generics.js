"use strict";
/*
这段代码编译不会报错，但是一个显而易见的缺陷是：它并没有准确的定义返回值的类型：

首先使用any会关闭TS的类型检查

其次Array<any> 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 value 的类型。
*/
function createArray(len, val) {
    return Array(len).fill(null).map(function () { return val; });
}
var myArray = createArray(10, "x");
console.log(myArray);
// 泛型
function createArr(len, val) {
    var result = [];
    // for (let i = 0; i < len; i++) {
    //   result[i] = val;
    // }
    // return result;
    result = Array(len)
        .fill(null)
        .map(function () { return val; });
    return result;
}
createArr(10, 100);
function swap(f) {
    return [f[1], f[0]];
}
console.log(swap([1, "w"]));
function sFoo(arg) {
    console.log(arg.length);
    return arg;
}
// 如果传入的参数没有length属性，会直接报错
console.log(sFoo('string'));
var SelectGirl = /** @class */ (function () {
    function SelectGirl(girls) {
        this.girls = girls;
    }
    SelectGirl.prototype.getGirl = function (index) {
        return this.girls[index].name;
    };
    return SelectGirl;
}());
var selectGirl = new SelectGirl([{ name: "1" }, { name: "2", id: 8 }]);
console.log(selectGirl.getGirl(1));
