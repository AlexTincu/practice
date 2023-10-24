
function by(propName) {
  return function (a, b) {
    return a[propName] - b[propName];
  }
}

const person1 = { name: 'joe', height: 72 };
const person2 = { name: 'rob', height: 70 };
const person3 = { name: 'nicholas', height: 66 };

const arr_ = [person1, person2, person3];

const arr_sorted = arr_.sort(by('height')); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ]




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