interface User {
  name : string;
  age : number;
}

function personUser(user: User): void {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

const user: User = { name: "John", age: 25};

personUser(user);