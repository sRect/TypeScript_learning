// 函数声明
function sum(x: number, y: number): number {
  return x + y;
}

// 函数表达式
const sum2 = function (x: number, y: number): number {
  return x + y;
};

// void 类型来表示函数没有返回值
const sum3 = function (x: number, y: number): void {
  console.log(x + y);
};

sum3(1, 2);

// 函数类型先声明，再定义
let add: (x: number, y: number) => number;

add = function (x: number, y: number): number {
  return x + y;
};

add(1, 2);

// 函数类型声明+箭头函数
let add2: (x: number, y: number) => number = (x: number, y: number): number => {
  return x + y;
};

// 类型别名+函数类型声明+箭头函数
type Adder = (x: number, y: number) => number;
const add3: Adder = (x , y) => x + y;

// interface 定义函数
interface Sum {
  (x: number, y:number): number
}
const add4: Sum = (x, y) => x + y;


// 可缺省和可推断的返回值类型
function computeType(a:boolean, b: string) {
  const booleanArr = [a];
  const strArr = [b];
  return {
    booleanArr,
    strArr,
  }; 
  // 返回  {
  //     booleanArr: boolean[];
  //     strArr: string[];
  // }
}
