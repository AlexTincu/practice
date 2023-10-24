// creare obiecte

// "object literal" syntax
let user = {
  name: "Alex",
  age: 37,
  getBirthdate() {
    return new Date().getFullYear() - this.age;
  },
};

// Constructor function for User objects
function User(name, age) {
  this.name = name;
  this.age = age;
}
const user2 = new User("John Doe", 50);

console.log(
  `${user.name} are ${user.age} de ani. S-a nascut in ${user.getBirthdate()}`
);

// adaugare proprietate
user.address = "Bucuresti";

// stergere adresa
delete user.address;

// cand proprietatea contine spatii goale
user["cod postal"] = "123455";

// accesarea unei proprietati in mod dinamic
// let key = prompt("What do you want to know about the user?", "name");
// access by variable
// alert(user[key]); // John (if enter "name")

// let newKey = prompt("What do you want to add to the user?", "orice");
// user[newKey] = "altceva";

// console.log(user);

let fruit = "apple";
let bag = {
  [fruit + "Computers"]: 5, // bag.appleComputers = 5
};

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

// shorthand
function makeUser2(name, age) {
  return {
    name, // same as name: name
    age,
  };
}

let person = makeUser("John", 30);
// console.log(person.name); // John

let obj = {
  0: "test", // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
// console.log(obj["0"]); // test
// console.log(obj[0]); // test (same property)

obj[3] = "test3";
obj[2] = "test2";

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codes) {
  // console.log(+code); // 49, 41, 44, 1
}

// in operator
let user3 = { name: "John", age: 30 };

// console.log("age" in user3); // true, user.age exists
// console.log("blabla" in user3); // false, user.blabla doesn't exist

let user4 = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user4) {
  // keys
  // console.log(key);  // name, age, isAdmin
  // values for the keys
  // console.log(user[key]); // John, 30, true
}

const object1 = {
  a: 1,
  b: 2,
  c: 3,
};

// console.log(Object.getOwnPropertyNames(object1));
// Expected output: Array ["a", "b", "c"]

// cum verifici daca un obiect este gol
function isEmpty1(object) {
  for (let key in object) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

function isEmpty2(object) {
  return Object.getOwnPropertyNames(object).length == 0;
}

// console.log(isEmpty1({ name: 'Alex', age: 30 }))

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let name in salaries) {
  sum += salaries[name];
}

console.log(sum);
