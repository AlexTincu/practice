/*
Cand dorim să atribuim o valoare implicită atunci când valoarea originală este null sau undefined, 
nu si în cazul în care valoarea originală este un alt falsy value, cum ar fi 0, '', false.
*/
const username = null;
const defaultUsername = username ?? "Utilizator anonim";

console.log(defaultUsername); // Output: 'Utilizator anonim'

// Evitarea erorilor cu operatorul nullish coalescence:
const config = {
  timeout: 1000,
  maxRetries: 3,
  errorMessage: "",
};

const timeout = config.timeout ?? 5000;
const maxRetries = config.maxRetries ?? 5;
const errorMessage = config.errorMessage ?? "A apărut o eroare.";

console.log(timeout, maxRetries, errorMessage);
// Output: 1000 3

const data = {
  user: {
    name: "Alex",
    age: null,
  },
};

const userName = data.user.name ?? "Nume necunoscut";
const userAge = data.user.age ?? "Vârstă necunoscută";

console.log(userName, userAge);
// Output: 'Alex' 'Vârstă necunoscută'
