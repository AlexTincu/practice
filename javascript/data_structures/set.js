/*
Folosește un ARRAY atunci când:

Ai nevoie de o colecție ordonată de elemente.
Ai nevoie să păstrezi elemente duplicate în colecție.
Ai nevoie să accesezi elementele prin index.
Ai nevoie să iterezi prin elementele într-o ordine specifică.

Folosește un SET atunci când:

Ai nevoie de o colecție de elemente unice.
Nu ai nevoie de o ordine specifică a elementelor.
Ai nevoie să verifici rapid dacă un element există în colecție, cautarea este mai rapida
Nu ai nevoie să accesezi elementele prin index.
*/

const favoriteFruits = new Set();

// Adăugarea fructelor preferate în Set
favoriteFruits.add("Mere");
favoriteFruits.add("Portocale");
favoriteFruits.add("Banane");
favoriteFruits.add("Mere"); // Elementul duplicat nu va fi adăugat

console.log(favoriteFruits); // Output: Set { 'Mere', 'Portocale', 'Banane' }

// Verificarea dacă un anumit fruct este în Set
console.log(favoriteFruits.has("Portocale")); // Output: true
console.log(favoriteFruits.has("Cireșe")); // Output: false

// Obținerea numărului de fructe preferate din Set
console.log(favoriteFruits.size); // Output: 3

// Eliminarea unui fruct din Set
favoriteFruits.delete("Banane");

console.log(favoriteFruits); // Output: Set { 'Mere', 'Portocale' }
