/* 
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, 
or properties from objects, into distinct variables.
*/
const foo = ["one", "two"];
const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); // undefined


let a, b, rest;
[a, b] = [10, 20];

// schimbarea valorilor intre a si b
[a, b] = [b, a];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]

// destructurare cu redenumirea variabilelor
const obj = { a: 1, b: 2 };
const { a: first, b: second } = obj;
// is equivalent to:
// const first = obj.a;
// const second = obj.b;