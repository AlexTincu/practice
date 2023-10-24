const user = {
  name: "Alex",
  address: {
    city: "New York",
    street: "123 Main St",
  },
};

const cityName = user.address?.city;
const countryName = user.address?.country; // nu exista dar nici nu avem eroare

console.log(cityName); // 'New York'
console.log(countryName); // undefined
