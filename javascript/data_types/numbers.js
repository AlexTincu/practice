let numarIntreg = 42;
let numarZecimal = 3.14;

// operatii matematice de baza
let suma = 10 + 5;
let diferenta = 20 - 8;
let produs = 6 * 4;
let impartire = 15 / 3;
let restImpartire = 17 % 5;
let putere = Math.pow(2, 3); // 2 la puterea 3

// Conversia unui string într-un număr
// Facem asta de obicei cand luam datele de la utilizator (din input sau prompt())
let text = '123';
let numar = parseInt(text);
// let numar = +text; // alternativa mai scurta
let numarFloat = parseFloat('123.45');

// Generarea unui număr aleatoriu între două limite:
let numarAleatoriu = Math.random(); // între 0 și 1
let numarAleatoriuIntreg = Math.floor(Math.random() * 10); // între [0 și 10)
let numarAleatoriuInterval = Math.floor(Math.random() * (max - min + 1)) + min; // între min și max

// Rotunjirea unui număr:
let unNumarZecimal = 3.7;
let numarRotunjit = Math.round(unNumarZecimal); // 4
let numarRotunjitJos = Math.floor(unNumarZecimal); // 3
let numarRotunjitSus = Math.ceil(unNumarZecimal); // 4

// Verificarea dacă un număr este par sau impar:
function estePar(numar) {
    return numar % 2 === 0;
}
console.log(estePar(4)); // Output: true
console.log(estePar(7)); // Output: false


// convertirea intr-o alta baza
let unNumar = 42;
let numarBinar = unNumar.toString(2); // '101010'
let numarHexadecimal = unNumar.toString(16); // '2a'
// let numarHexadecimal = parseInt('2a', 16); // 42
let numarDecimal = parseInt(numarBinar, 2); // 42


// verificarea daca este intreg sau nu
console.log(Number.isInteger(42)); // Output: true
console.log(Number.isInteger(3.14)); // Output: false

// verificarea daca este numar sau nu
console.log(isNaN(42)); // Output: false
console.log(isNaN('abc')); // Output: true

// Rotunjirea unui număr la un anumit număr de zecimale:
let unAltnumar = 3.14159;
let numarRotunjit2 = unAltnumar.toFixed(2); // '3.14'

//  Rotunjirea numărului la un număr specific de cifre semnificative, inclusiv partea întreagă și partea zecimală.
let numar2 = 3.14159;
let numarFormatat = numar2.toPrecision(4); // Output: 3.142
