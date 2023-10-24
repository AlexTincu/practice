let index = "name";
let value = "Chris";

let myObj = { age: 38 };
myObj[index] = value;

let myObj2 = myObj;

// transform object to json string
let myString = JSON.stringify(myObj);
console.log(myString);

// transform json to object
let myObject = JSON.parse(myString);
console.log(myObject);