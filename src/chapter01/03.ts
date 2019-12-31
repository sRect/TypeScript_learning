interface Person3 {
  firstName: string,
  lastName: string
}

class User {
  fullName: string
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + lastName;
  }
}

function greeter3(person: Person3) {
  const {firstName, lastName} = person;
  return `My name is ${firstName}${lastName}`;
}

let user3 = new User('pi', 'er');
console.log(greeter3(user3))