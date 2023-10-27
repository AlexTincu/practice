let nume = 'Alex';
let mesaj = "Bună, lume!";
let paragraf = `Acesta este un paragraf.`;

// concatenare
let numeComplet = nume + ' Smith';
let salut = mesaj.concat(' Cum te simți?');
let salut2 = `${mesaj} Cum te simți?`;

// charAt
let primulCaracter = nume.charAt(0);
let ultimulCaracter = nume.charAt(nume.length - 1);

// caracterele pot fi accesate ca intr-un array
// let primulCaracter = nume[0];
// let ultimulCaracter = nume[nume.length - 1];

console.log(primulCaracter, ultimulCaracter);


// cautarea si inlocuirea
let adresa = 'Strada Principală, nr. 10';
let gasit = adresa.indexOf('Principală');
let adresaModificata = adresa.replace('10', '20');


// Transformarea în majuscule și minuscule
let numeMajuscule = nume.toUpperCase();
let mesajMinuscule = mesaj.toLowerCase();


// Divizarea și unirea stringurilor
let cuvinte = mesaj.split(' ');
let mesajUnificat = cuvinte.join('-');


// verificarea lungimii
let text = 'Hello, world!';
let lungime = text.length;
console.log(lungime); // Output: 13


// extragerea unui substring
let adresa2 = 'Strada Principală, nr. 10';
let numeStrada = adresa2.substring(6, 16);
console.log(numeStrada); // Output: Principală


// Verificarea dacă un string începe sau se termină cu un anumit text:
let numeFisier = 'document.txt';
let incepeCuDocument = numeFisier.startsWith('document');
let seTerminaCuTxt = numeFisier.endsWith('.txt');
console.log(incepeCuDocument); // Output: true
console.log(seTerminaCuTxt); // Output: true


// Transformarea unui string într-un array de caractere:
let string = 'Acesta este un exemplu';
let caractere = Array.from(string);
console.log(caractere); // Output: ['A', 'c', 'e', 's', 't', 'a', ' ', 'e', 's', 't', 'e', ' ', 'u', 'n', ' ', 'e', 'x', 'e', 'm', 'p', 'l', 'u']


// eliminarea spatiilor goale de la inceput si sfarsit
let textCuSpatii = '   Exemplu de text cu spații   ';
let textFaraSpatii = textCuSpatii.trim();
console.log(textFaraSpatii); // Output: 'Exemplu de text cu spații'


// Verificarea dacă un string conține un anumit text:
let paragraf2 = 'Acesta este un exemplu de paragraf .';
let contineExemplu = paragraf2.includes('exemplu');
console.log(contineExemplu); // Output: true

// Verificarea dacă un string este palindrom 
// (se citește la fel la fel de la stânga la dreapta și de la dreapta la stânga)
function estePalindrom(text) {
    let textInversat = text.split('').reverse().join('');
    return text === textInversat;
}

console.log(estePalindrom('radar')); // Output: true
console.log(estePalindrom('abcde')); // Output: false

