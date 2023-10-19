let result = "";
let i = 0;

// se executa cel putin o data
do {
  i = i + 1;
  result = result + i;
} while (false);

// nu se executa cel putin o data
while (false) {
  i = i + 1;
  result = result + i;
}

// How to Iterate

// with for
// for (let step = 0; step < 10; step++) {
//   if (step < 2) continue; // merge la iteratia urmatoare

//   console.log(step);

//   if (step > 3) break; // iese din loop
// }

// with for in
// const object = { a: 1, b: 2, c: 3, 0: "0" };
// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// with for of
// const array1 = ["a", "b", "c"];
// for (const element of array1) {
//   console.log(element);
// }

// with forEach
[1, 2, 3].forEach(value => console.log(value));

let user = {
  name: 'Alex',
  age: 37,
  getBirthdate() {
    return new Date().getFullYear() - this.age;
  }
}

Object.entries(user).forEach((key, value) => console.log(`${key} ${value}`));
Object.keys(user).forEach((key) => console.log(`${key}`));
Object.values(user).forEach((value) => console.log(`${value}`));