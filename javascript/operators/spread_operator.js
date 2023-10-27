// copierea unui array intr-un alt array | shallow copy
const array1 = [1, 2, 3];
const array2 = [...array1];
console.log(array2); // Output: [1, 2, 3]

// Copierea și modificarea unui obiect:
const user = { name: "Alex", age: 25 };
const updatedUser = { ...user, age: 26, gender: "male" };
console.log(updatedUser); // Output: { name: 'Alex', age: 26, gender: 'male' }

// combinarea a doua array-uri
const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
const combinedArray = [...array3, ...array4];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Combinația și extinderea mai multor obiecte:
const defaults = { theme: "light", fontSize: 14 };
const userPreferences = { fontSize: 16, showNotifications: true };
const mergedSettings = { ...defaults, ...userPreferences };
console.log(mergedSettings); // Output: { theme: 'light', fontSize: 16, showNotifications: true }

// Transmiterea unui număr variabil de argumente într-o funcție:
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
