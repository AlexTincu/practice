let dataCurenta = new Date();
console.log(dataCurenta); // Output: Wed Oct 24 2023 09:30:00 GMT+0300 (Eastern European Summer Time)

let anulCurent = dataCurenta.getFullYear();
console.log(anulCurent); // Output: 2023

let lunaCurenta = dataCurenta.getMonth();
console.log(lunaCurenta); // Output: 9 (octombrie)

let ziuaCurenta = dataCurenta.getDate();
console.log(ziuaCurenta); // Output: 24

let dataLocalizata = dataCurenta.toLocaleDateString();
console.log(dataLocalizata); // Output: 24.10.2023 (în funcție de setările locale)

// timpul în milisecunde care a trecut de la 1 ianuarie 1970 (Epoch) până la data specificată într-un obiect Date.
let timpCurent = dataCurenta.getTime();
console.log(timpCurent); // Output: 1666666200000

let oraCurenta = dataCurenta.getHours();
console.log(oraCurenta); // Output: 9

let minuteCurente = dataCurenta.getMinutes();
console.log(minuteCurente); // Output: 30

let dataISO = dataCurenta.toISOString();
console.log(dataISO); // Output: 2023-10-24T06:30:00.000Z

dataCurenta.setFullYear(2024);
console.log(dataCurenta); // Output: Thu Oct 24 2024 09:30:00 GMT+0300 (Eastern European Summer Time)


// diferenta in zile dintre 2 date
let data1 = new Date('2023-10-20');
let data2 = new Date('2023-10-24');

let timestamp1 = data1.getTime();
let timestamp2 = data2.getTime();

let diferentaMilisecunde = Math.abs(timestamp2 - timestamp1);
let diferentaZile = Math.ceil(diferentaMilisecunde / (24 * 60 * 60 * 1000));
console.log(diferentaZile); // Output: 4


let data = new Date();
let zi = data.getDate();
let luna = data.getMonth() + 1; // Adăugăm 1 deoarece indexul lunii începe de la 0
let an = data.getFullYear();

let formatData = `${zi}/${luna}/${an}`;
console.log(formatData); // Output: "24/10/2023" (în funcție de data curentă)
