interface Person {
  age: number,
  name: string
}

function greeter2(person: Person): string {
  const {age, name} = person;
  return `my name is ${name}, I'm ${age} years old`;
}

let user2 = {
  age: 18,
  name: "pi"
}

console.log(greeter2(user2))