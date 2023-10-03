/*
Hoisting este un concept important de inteles in JavaScript. 
Inseamna ca declaratiile de variabile si functii sunt procesate mai intai de interpretorul JavaScript, 
inainte de executia propriu-zisa a codului.
*/

/* Ex 1
Codul de mai jos va fi transformat de javascript astfel:

var x;
console.log(x); 
x = 2;

Se va afisa in consola undefined dar fara eroare
*/

console.log(x); 
var x = 2;


/* Ex 2 
La fel se intampla si cu declaratiile de functii 
*/
greet();

function greet() {
  console.log('Hello!');
}

/* 
Hoistingul nu functioneaza pentru let, si evident nici pentru const
Asta inseamna ca intotdeauna e bine ca mai intai sa initializam variabilele si apoi sa le folosim
*/
console.log(x); 
let x = 2; // Va genera eroare => ReferenceError: Cannot access 'x' before initialization