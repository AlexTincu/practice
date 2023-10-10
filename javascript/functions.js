// parametrii de tip object sunt transmisi prin referinta, adica modificarile persista in afara functiei
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

// console.log(mycar.make); // "Honda"
// myFunc(mycar);
// console.log(mycar.make); // "Toyota"

let i = 5;

// parametrii sunt transmisi prin valoare, adica in afara functiei modificarile nu persista
function myFunc(i) {
  i++;
  console.log(i);
}

myFunc(i);

console.log(i);
