// 可选参数必须接在必需参数后面
function getName(firstName: string, lastName?: string): string {
  if(lastName) return firstName + lastName;
  return firstName;
}

const str1 = getName("a", "b");
const str2 = getName("a");

// 默认参数
function getName2(firstName: string, lastName: string = 'hello'): string {
  if (lastName) return firstName + lastName;
  return firstName;
}

const str3 = getName2("a", "b");
const str4 = getName2("a");
console.log(str3);
console.log(str4);

function getName3(firstName: string = "hello", lastName: string ): string {
  return firstName + lastName;
}
const str5 = getName3("a", "b");
const str6 = getName3(undefined, 'b');
console.log(str5);
console.log(str6);

function log(x = 'hello') {
    console.log(x);
}
log(); //'hello'
log('hi'); //'hi'
// log(1); // Argument of type '1' is not assignable to parameter of type 'string | undefined'.ts(2345)

// 剩余参数

function handlePush(arr: any[], ...args: any[]):void {
  args.forEach((arg) => arr.push(arg));
}

let arr:any[] = [];
handlePush(arr, 1, 2, true);
console.log(arr);

// 函数重载
function handleReverse(x: number | string): number | string | void {
  if(typeof x === 'number') return Number(x.toString().split('').reverse().join(''));
  return x.split("").reverse().join("");
} 

console.log(handleReverse(123));
console.log(handleReverse('abc'));

// 然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。

function handleReverse2(x: number): number;
function handleReverse2(x: string): string;

function handleReverse2(x: number | string): number | string | void {
  if (typeof x === "number")
    return Number(x.toString().split("").reverse().join(""));
  return x.split("").reverse().join("");
} 

console.log(handleReverse2(1234));
console.log(handleReverse2("abcd"));