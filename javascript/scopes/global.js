/*
Variabilele declarate global (in afara oricarei functii sau block) sunt accesibile de oriunde in acel script
Variabilele nedeclarate intr-o functie sau intr-un block devin globale, 
ceea ce poate duce la erori daca mai exista o alta variabila globala cu acelasi nume.
*/

var name = "alex";
function myFunction() {
  x = "Hello"; // x nu este declarata cu var/let/const
}

myFunction();

console.log(x); // "Hello" - x este acum o variabila globala. Nu este ok ca o functie sa modifice o variabila globala. 


