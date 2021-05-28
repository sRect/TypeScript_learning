/*
这段代码编译不会报错，但是一个显而易见的缺陷是：它并没有准确的定义返回值的类型：

首先使用any会关闭TS的类型检查

其次Array<any> 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 value 的类型。
*/
function createArray(len: number, val: string): any[] {
  return Array(len).fill(null).map(() => val);
}

let myArray: string[] = createArray(10, "x");
console.log(myArray);


// 泛型
function createArr<T>(len: number, val: T): Array<T> {
  let result: T[] = [];
  // for (let i = 0; i < len; i++) {
  //   result[i] = val;
  // }
  // return result;
  result = Array(len)
    .fill(null)
    .map(() => val);
  
  return result;
}

createArr<number>(10, 100);


function swap<T,U>(f: [T, U]): [U, T] {
  return [f[1], f[0]]
}

console.log(swap([1, "w"]));

// 泛型约束
// 将泛型当成是一个普通的类去使用，也可以对泛型的范围进行约束
// 1.泛型继承接口
interface Tlen {
  length: number
}

function sFoo<T extends Tlen>(arg: T): T {
  console.log(arg.length);
  return arg
}
// 如果传入的参数没有length属性，会直接报错
console.log(sFoo('string'));
// console.log(sFoo(123)) // Argument of type 'number' is not assignable to parameter of type 'Tlen'. ts(2345)


interface Girl {
  name: string,
  id?: number
}

class SelectGirl<T extends Girl> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

const selectGirl = new SelectGirl<Girl>([{ name: "1" }, { name: "2", id: 8 }]);
console.log(selectGirl.getGirl(1));