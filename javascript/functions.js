// parametrii de tip object sunt transmisi prin referinta, adica modificarile persista in afara functiei
// la fel se intampla si pentru arrays dat fiind ca array-urile sunt tot obiecte
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

// console.log(mycar.make); // "Honda"
// myFunc(mycar);
// console.log(mycar.make); // "Toyota"

let i = 5;

// parametrii sunt transmisi prin valoare in cazul primitivelor, 
// adica in afara functiei modificarile nu persista
function myFunc(i) {
  i++;
  console.log(i);
}
myFunc(i);

console.log(i);

// function declaration can be hoisted
console.log(square(3));

// function declaration
function square(number) {
  return number * number;
}

// function expression
const square2 = function (number) {
  return number * number;
}

// arrow function
const square3 = (number) => {
  return number * number;
}

// function expressions cannot be hoisted
// console.log(square4(3)); // TypeError: square4 is not a function
// arrow function, cand avem un singur statement return, se recomanda scrierea intr-o forma scurta
var square4 = (number) => number * number;

// recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}


// default parameters
function multiply(a, b = 1) {
  return a * b;
}
console.log(`multiply ${multiply(5)}`); // 5

// rest parameters
function multiplyAll(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiplyAll(2, 1, 2, 3, 4);
console.log(arr); // [2, 4, 6, 8]

// IIFE - Immediately-Invoked Function Expression 
(() => {
  console.log('something');
})();

// get a random number between a and b
function random(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(random(10, 20));