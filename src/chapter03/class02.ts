class FPerson {
  readonly fav: string[] = ["girl", 'game'];

  static readonly aboutName: string = 'bob';

  private newName: string = 'Bob';
  
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
console.log(hPerson.sayLove());
console.log(hPerson.sayHello());