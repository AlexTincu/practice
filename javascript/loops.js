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

// for (let step = 0; step < 10; step++) {
//   if (step < 2) continue; // merge la iteratia urmatoare

//   console.log(step);

//   if (step > 3) break; // iese din loop
// }

// const object = { a: 1, b: 2, c: 3, 0: "0" };
// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// const array1 = ["a", "b", "c"];
// for (const element of array1) {
//   console.log(element);
// }
