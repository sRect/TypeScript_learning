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
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; // 添加字符串签名索引
}

function printSquare(conf: SquareConfig): void {
  console.log(`color: ${conf?.color}, width: ${conf?.width}`);
}

printSquare({
  colour: 'red', // 这里故意拼错
  width: 30
});

// 交叉类型
interface CircleConf1 {
  color?: string
}

interface CircleConf2 {
  radius: number,
  getArea: () => number
}

// conf 参数可以访问类型 CircleConf1 和 CircleConf2 所有属性
function getCircle(conf: CircleConf1 & CircleConf2):void {
  const color = conf.color || 'red';
  const radius = conf.radius || 40;

  conf.getArea = (): number => Math.PI * Math.pow(radius, 2);
  // conf.color = 'red';
  // conf.radius = 30;
  // conf.getArea = ():number => Math.PI * Math.pow(conf.radius, 2);

  console.log(`circle: area=>${conf.getArea()}, color: ${color}`);
};

getCircle({ radius: 40, getArea: () => 1 });
