// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

let nume = "Dolly";
// let hello = `Hello ` + name + '!';
let total = 100, tva = 19;
let hello = `Hello ${nume}!, totalul facturii este ${total + tva}`; // template literal
//console.log(hello);

// x is a string
let nume1 = "John";

// y is an object
let nume2 = new String("John");
// console.log(nume1 === nume2); // false

// console.log(10 == '10'); // true
// console.log(10 === '10'); // false, primul e number, al doilea e string


let x1 = new String("John");
let x2 = new String("John");
// x1 !== x2 // pentru ca sunt obiecte

// console.log(x1.at(0));
// console.log(x1[0]); // prima litera
// console.log(x1[x1.length - 1]); // ultima litera

let text = "Please visit MICROSOFT and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
let newText2 = text.replace(/Microsoft/gi, "W3Schools"); // expresie regulata

// console.log(newText);
// console.log(newText2);


let letters = "Please visit MICROSOFT and Microsoft!";
const myArray = letters.split("");
// console.log(myArray);

let word = "Please";
let text1 = "Please locate where 'locate' occurs!";
let index = text1.indexOf(word);
// console.log(index); // -1 cand nu il gaseste
// console.log(`Cuvantul '${word}' ${index >= 0 ? 'este' : 'nu este'} in stringul '${text1}'`);


let text3 = "The rain in SPAIN stays mainly in the plain";
text3.match(/ain/gi);


// console.log(typeof z === 'undefined');
let x3 = null;
if (!x3) {
    console.log(x3);
} else {
    console.log("este gol");
}

// coercion => conversie implicita
// console.log("5" + 5); // Output: 55

// type conversion / typecasting => conversie explicita
// console.log(parseInt("5")); Output: 5

console.log(typeof [1, 2, 3, 4]);
console.log([1, 2, 3, 4] instanceof Array);
console.log(new Date('10.10.2023') instanceof Date);