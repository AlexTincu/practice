/*
Let a fost introdus mai tarziu pentru a rezolva unele din slabiciunile lui var. 
Variabilele declarate cu let au scop de bloc, ceea ce inseamna ca sunt accesibile doar in cadrul blocului in care sunt declarate - 
Ex: instructiunile if sau for. 
Spre deosebire de var, variabilele let nu pot fi redeclarate, ceea ce ajuta la evitarea comportamentului neintentionat.
*/

// Ex 1
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i); // Nu va functiona - i nu este definita in afara blocului


/*
Ex 2:
Aici variabila are scop separat in fiecare bloc if/else, deci nu poate fi accesata in afara lor. 
Aceasta este o caracteristica utila a let care impiedica suprascrierea neintentionata a variabilelor.
*/
if(condition) {
  let variable = 'value1';
} else {
  let variable = 'value2'; 
}

console.log(variable); // Nu va functiona - variabila are scop doar in blocurile if/else
