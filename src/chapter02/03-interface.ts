// 可选属性 ?
interface Count {
  a: number,
  b?: string
};

function print2(arg: Count): void {
  console.log(`a:${arg.a}, b:${arg.b}`);
};

let myObj = {a: 123};

print2(myObj);

// 只读属性 readonly
interface PointVal {
  readonly x: number,
  readonly y: number,
  msg?: string
}

let p1: PointVal = {x: 100, y: 100}
// p1.x = 200 // Cannot assign to 'x' because it is a read-only property.ts(2540)

let fav: ReadonlyArray<boolean> = [true, false]
// fav.length = 0; // Cannot assign to 'length' because it is a read-only property.ts(2540)
// fav[0] = false; // 类型“readonly boolean[]”中的索引签名仅允许读取。ts(2542)
// fav.push(true); // 类型“readonly boolean[]”上不存在属性“push”。ts(2339)
fav = [false, true, false];
console.log(fav)
let re: boolean[] = [];
// 不能把ReadonlyArray赋值给普通数组
// re = fav; // he type 'readonly boolean[]' is 'readonly' and cannot be assigned to the mutable type 'boolean[]'.ts(4104)
// 但是可以通过类型断言重写
re = fav as boolean[]; 
console.log(re)

// 额外的属性检查