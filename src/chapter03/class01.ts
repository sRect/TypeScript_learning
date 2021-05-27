class SPerson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  say():void {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

let p: SPerson = new SPerson("rose", 18);
p.say();