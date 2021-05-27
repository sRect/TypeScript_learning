class FPerson {
  readonly fav: string[] = ["girl", 'game'];

  static readonly aboutName: string = 'bob';

  private newName: string = 'Bob';

  get favStr() {
    return this.fav.join(',')
  }

  set favStr(val: string) {
    this.fav.push(val)
  }
  
  public sayHello() {
    console.log(`name: ${this.newName}`);
  }
}

const fPerson: FPerson = new FPerson();
// console.log(FPerson.aboutName);
// console.log(fPerson.sayHello());


class HPerson extends FPerson {
  protected heart: string = 'star';

  constructor() {
    super();
  }

  public sayLove() {
    console.log(`heart: ${this.heart}`)
  }
}

const hPerson: HPerson = new HPerson();

class TPerson extends FPerson {
  constructor(public xx: string, public yy: string) {
    super();

    this.xx = xx;
    this.yy = yy;
  }

  logXXYY():void {
    console.log(`xx: ${this.xx}, yy: ${this.yy}`)
  }
}

const tPerson: TPerson = new TPerson('hh', 'cc');
tPerson.logXXYY();
tPerson.sayHello();


console.log(`static aboutName: ${HPerson.aboutName}`);
console.log(hPerson.sayLove());
console.log(hPerson.sayHello());
console.log(`fav: ${hPerson.favStr}`);
hPerson.favStr = 'hello';
// hPerson.newName = 'hhh';
console.log(hPerson);
console.log(fPerson);