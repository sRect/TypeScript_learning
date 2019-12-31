// 在一个嵌套作用域里引入一个新名字的行为称做屏蔽。 它是一把双刃剑
function sumMatrix(matrix: number[][]) {
  let sum = 0
  for (let i = 0; i < matrix.length; i++) {
    let currentRow = matrix[i]
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i]
    }
  }

  return sum
}

console.log(sumMatrix([[1, 2], [1, 2]]));

// 属性重命名
// 将a作为val1，将b作为val2
function foo({ a: val1, b: val2 }: { a: string, b: number }): void {
  console.log(`a: ${val1}, b: ${val2}`)
}

console.log(foo({ a: "str", b: 123 })) // a: str, b: 123