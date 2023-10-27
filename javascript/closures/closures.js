/*
Ce este un closure?

Closure - ul este o funcție care păstrează accesul la variabilele din contextul în care a fost creată, 
chiar și după ce acea funcție a fost returnată sau a ieșit din contextul inițial.
Aceasta înseamnă că o funcție closure poate accesa și modifica variabilele din contextul în care 
a fost definită, chiar dacă acele variabile nu mai sunt vizibile în contextul în care funcția este apelată.

Un closure este creat atunci când o funcție internă este definită în interiorul unei alte funcții și este 
returnată sau transmisă ca argument către o altă funcție.
Funcția internă păstrează accesul la variabilele din funcția exterioară, chiar și după ce funcția exterioară 
a terminat de executat.
*/



/*
1. Exemplu de closure simplu:

În acest exemplu, funcția `counter` creează o variabilă `count` și o funcție internă `increment` 
care accesează și modifică acea variabilă. Apoi, funcția `counter` returnează funcția `increment`. 
Când apelăm `counter()`, obținem o referință la funcția `increment`, care păstrează accesul 
la variabila `count`. Astfel, putem apela `incrementCounter()` de mai multe ori și valoarea lui `count` 
va fi incrementată și afișată corect.
*/

function counter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

const incrementCounter = counter();
incrementCounter(); // Output: 1
incrementCounter(); // Output: 2



// Ex 2
function outside(x) {
  function inside(y) {
    return x + y;
  }

  return inside;
}

const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it

console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8

// Ex 3
function by(propName) {
  return function (a, b) {
    return a[propName] - b[propName];
  }
}

const person1 = { name: 'joe', height: 72 };
const person2 = { name: 'rob', height: 70 };
const person3 = { name: 'nicholas', height: 66 };

const arr_ = [person1, person2, person3];

sorting = 'height';
const arr_sorted = arr_.sort(by(sorting)); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ]
console.log(arr_sorted);


/* 
2. Exemplu de closure în funcții callback:

În acest exemplu, funcția `fetchData` primește un URL și o funcție de callback. 
În interiorul funcției `fetchData`, se realizează o cerere asincronă și, după ce datele sunt primite, 
se apelează funcția de callback cu datele respective. 
Funcția `displayData` este pasată ca argument și devine closure, păstrând accesul la variabila `data`. 
Astfel, când datele sunt primite, funcția `displayData` este apelată și poate utiliza acele date.
*/

function displayData(data) {
  console.log("Data received:", data);
}

function fetchData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      callback(data);
    })
    .catch(error => {
      console.log('A apărut o eroare:', error);
    });
}

fetchData('https://jsonplaceholder.typicode.com/posts', displayData);