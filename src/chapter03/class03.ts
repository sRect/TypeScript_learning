// 以abstract开头的类是抽象类
// 使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现
abstract class Animal {
  public animalName: string;

  constructor(animalName: string) {
    this.animalName = animalName;
  }

  abstract say(val:string):void;
}

class Dog extends Animal {
  say() {
    console.log(`animal say: ${this.animalName}`)
  }
}

const dog = new Dog('小狗');
console.log(dog.animalName)
console.log(dog.say())