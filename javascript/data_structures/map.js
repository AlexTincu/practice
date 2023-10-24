/* 
Folosim arrays si sets cand nu avem nevoie de key si obiecte sau maps cand avem

Objects:
Traditional key/value store
Easy to write and access values with . and []

Maps:

Better performance
Keys can have any data type
easy to iterate 
Easy to iterate size
*/

const userRoles = new Map();

// Adăugarea rolurilor utilizatorilor în Map
userRoles.set("Alex", "Administrator");
userRoles.set("Maria", "Editor");
userRoles.set("John", "Utilizator");

console.log(userRoles); // Output: Map { 'Alex' => 'Administrator', 'Maria' => 'Editor', 'John' => 'Utilizator' }

// Verificarea dacă un anumit utilizator are un rol în Map
console.log(userRoles.has("Maria")); // Output: true
console.log(userRoles.has("David")); // Output: false

// Obținerea rolului unui utilizator din Map
console.log(userRoles.get("Alex")); // Output: 'Administrator'

// Obținerea numărului de perechi cheie-valoare din Map
console.log(userRoles.size); // Output: 3

// Eliminarea unui utilizator din Map
userRoles.delete("John");

console.log(userRoles); // Output: Map { 'Alex' => 'Administrator', 'Maria' => 'Editor' }
