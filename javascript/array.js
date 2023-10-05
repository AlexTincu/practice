let fruits = ["Apple", "Orange", "Plum"];
// let fruits = new Array("Apple", "Orange", "Plum"); // alternativa

// console.log(fruits[0]); // Apple
// console.log(fruits[1]); // Orange
// console.log(fruits[2]); // Plum

fruits[2] = 'Apple';

//fruits[10] = 'Banana';

// adaugare
fruits.push('Banana');

// stergere de pe ultima pozitie
fruits.pop();

console.log(fruits);
console.log(fruits.length);


// mix of values
let arr = ['Apple', { name: 'John' }, true, function () { alert('hello'); }];

// get the object at index 1 and then show its name
console.log(arr[1].name); // John

// get the function at index 3 and run it
arr[3](); // hello


// accesarea ultimului element
let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[fruits.length - 1]); // Plum
console.log(fruits.at(-1)); // Plum

// array-ul functioneaza ca o stiva/stack LIFO (Last-In, First-Out)
let fruits = ["Apple", "Orange", "Pear"];
console.log(fruits.pop()); // remove "Pear" and alert it
console.log(fruits); // Apple, Orange
fruits.push("Pear");
console.log(fruits); // Apple, Orange, Pear


// array-ul functioneaza ca o coada/queue |  FIFO (First-In, First-Out)
let fruits = ["Apple", "Orange", "Pear"];
console.log(fruits.shift()); // remove Apple and alert it
console.log(fruits); // Orange, Pear
fruits.unshift('Apple');
console.log(fruits); // Apple, Orange, Pear


// parcurgerea array-urilor
let array = ["Apple", "Orange", "Pear"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (let fruit of array) {
    console.log(fruit);
}

for (let key in array) {
    alert(array[key]); // Apple, Orange, Pear
}