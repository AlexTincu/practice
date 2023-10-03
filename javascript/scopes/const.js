/*
Const duce scopul de bloc cu un pas mai departe prin declararea de variabile care nu pot fi reatribuite sau redeclarate. 
Aceasta este util pentru variabilele care sunt setate la initializare si niciodata nu se asteapta sa se schimbe, 
precum numele utilizatorilor sau constantele din codul tau. 

Incercarea de a reatribui o variabila const va duce la eroare.
Atentie, daca intr-o variabila de tip const stocam un obiect (Object, Array, Date) si modificam obiectul nu inseamna ca 
avem reatribuire, deci nu avem eroare.
*/

/* Ex 1 */
if (true) {
  const test = 2;
  console.log(test); // 2
  test = 3; // Nu se poate face reatribuire => TypeError: Assignment to constant variable.
}
console.log(test); // Variabila nu este cunoscuta in afara blocului if => ReferenceError: test is not defined

/* Ex 2 */
const user = { name: "John Doe", age: 30};
user.name = "Jane Doe 2"; // OK: Aici nu avem reatribuire pentru user, avem o modificare a unei proprietati a variabilei user
const user = {name: "John Doe 2", age: 30}; // Eroare: Pentru ca aici avem atribuire
  

/* Ex 3 */
// Constante pentru endpoint-uri API
const API_URL = "https://example.com/api";
const USERS_ENDPOINT = "/users";
// Folosim constantele definite
fetch(API_URL + USERS_ENDPOINT).then((response) => response.json());
