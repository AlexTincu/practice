/*
Var este cel mai vechi mod de a declara variabile in JavaScript. 

Variabilele declarate cu var sunt function-scoped (cand sunt declarate in interiorul unei functii) - pot fi accesate 
oriunde in interiorul functiei in care sunt declarate, dar nu in afara ei. 
Sau au scop global cand nu sunt declarate in interiorul unei functii.

Totusi, variabilele var pot fi redeclarate si reatribuite, ceea ce poate duce la bug-uri.
*/

function test() {
  var test = 2;
  console.log(test); // 2
}

test();
console.log(test); // ReferenceError: test is not defined