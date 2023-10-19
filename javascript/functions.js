// parametrii de tip object sunt transmisi prin referinta, adica modificarile persista in afara functiei
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

// parametrii sunt transmisi prin valoare, adica in afara functiei modificarile nu persista
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
console.log(square4(3));

var square4 = (number) => number * number;


// recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// closures
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it

console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8

// default parameters
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5)); // 5

// rest parameters
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3, 4);
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