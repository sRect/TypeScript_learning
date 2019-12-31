// 1.boolean
let a: boolean = true;
console.log("boolean", a)

// 2.string
let b: string = "str";
console.log("string", b)

// 3.number
let c: number = 1;
console.log("number", c)

// 4.array
let d: number[] = [1, 2];
// let e: Array<number | string> = [1, "str"];
let e: Array<number | string> = ["str", 1];
console.log("array", d, e)

// 5.tuple
let f: [string, boolean]
f = ["str", false];
// f = [false, "str"] // err
console.log("tuple", f)
console.log("tuple", f[1])

// 6.enum
// 默认情况下，从 0 开始为元素编号。
enum Color { Red, Blue, Green }
let g: Color = Color.Red;
console.log("g", g) // 0
// 手动更改索引
enum Phone { iPhone = 1, xiaomi = 2, huawei = 3 }
let h: Phone = Phone.huawei;
console.log("h", h) // 3
// 反向查找
let i: string = Phone[2];
console.log("i", i) // xiaomi

// 7.any
let j: any = 123;
j = false;
console.log("j", j);
let k: any[] = [1, "str", null, false, undefined]

// 8.void
function msg(): void {
  console.log("void msg")
}

// 9.null
let l: null = null;

// 10.undefined
let m: undefined = undefined;

// 11.never
//返回never的函数必须存在无法到达终点
function error(msg: string): never {
  throw new Error(msg)
}
// 推断的返回值类型为never
function fail(): void {
  return error("something fail")
}
// 返回never的函数必须存在无法到达终点
function infiniteLoop(): never {
  while (true) {

  }
}

// 12.object
declare function create(arg: object | number[]): void

create([1, 2, 3])
create({ a: 1 })
// create(false) // err

// 类型断言
// 告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 
let someVal: any = "str";
let strLength: number = (someVal as string).length;
// 或者
let someVal2: any = 123.98;
let numLength: string = (<number>someVal2).toFixed(1);
