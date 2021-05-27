// 使用接口（Interfaces）来定义对象的类型
interface myInterface {
  name: string;
  age: number;
  readonly gender: string;
}

const xiaoming: myInterface = {
  name: 'xiaoming',
  age: 18,
  gender: 'man'
}

console.log(xiaoming);

// 类使用implements实现接口
// 一个类可以实现多个接口
interface MyInter {
  name: string,
  sayHello(): void
}

interface MyInter2 {
  readonly id: number; // 只读属性
  age?: number; // 可选属性
  [propsName: string]: any; // 任意属性
  sayName(): void;
}

// 接口继承接口
interface MyInter3 extends MyInter2 {
  sayAge(): void;
}

class Human implements MyInter, MyInter3 {
  name: string;
  id: number;
  age?: number;

  constructor(name: string, id: number, age?:number) {
    this.name = name;
    this.id = id;
    this.age = age;
  }

  sayHello() {
    console.log("hello everyone");
  }

  sayName() {
    console.log(`name: ${this.name}`);
  }

  sayAge() {
    console.log(`age: ${this.age}`)
  }
}

const human:Human = new Human('jack', 1, 18);
human.sayHello();
human.sayName();
human.sayAge();
