"use strict";
// 在一个嵌套作用域里引入一个新名字的行为称做屏蔽。 它是一把双刃剑
function sumMatrix(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) {
        var currentRow = matrix[i_1];
        for (var i_2 = 0; i_2 < currentRow.length; i_2++) {
            sum += currentRow[i_2];
        }
    }
    return sum;
}
console.log(sumMatrix([[1, 2], [1, 2]]));
// 属性重命名
// 将a作为val1，将b作为val2
function foo(_a) {
    var val1 = _a.a, val2 = _a.b;
    console.log("a: " + val1 + ", b: " + val2);
}
console.log(foo({ a: "str", b: 123 })); // a: str, b: 123
