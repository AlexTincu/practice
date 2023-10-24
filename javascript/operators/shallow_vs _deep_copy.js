// shallow copy | spread operator
const array1 = [1, 2, 3];
const array2 = [...array1];
console.log(array2); // Output: [1, 2, 3]

// deep copy of an array
const originalArray = [1, 2, [3, 4, [5, 6]]];
// const deepCopyArray = originalArray.map((item) =>
//   Array.isArray(item) ? [...item] : item // with max 2 levels
// );
const deepCopyArray = JSON.parse(JSON.stringify(originalArray)); // with any number of levels

deepCopyArray[2][0] = 5;
deepCopyArray[2][2][1] = 5;

console.log(originalArray); // Output: [1, 2, [3, 4]]
console.log(deepCopyArray); // Output: [1, 2, [5, 4]]

// shallow copy of an object | spread operator
const user = { name: "Alex", age: 25 };
const user2 = { ...user }; // user 2 este acum un alt obiect
user.age = 30;
console.log(user);
console.log(user2);

// deep copy of an nested object
const originalObject = {
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
};

const deepCopy = JSON.parse(JSON.stringify(originalObject));
deepCopy.address.city = "Los Angeles";

console.log(originalObject.address.city); // Output: New York
console.log(deepCopy.address.city); // Output: Los Angeles
