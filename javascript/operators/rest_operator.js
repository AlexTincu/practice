const restaurant = {
  name: "Restaurantul Calinescu",
  categories: [
    "Mâncare italiană",
    "Mâncare chinezească",
    "Mâncare vegetariană",
    "Deserturi",
  ],
  starterMenu: [
    "Salată Caesar",
    "Supă de legume",
    "Bruschetta",
    "Aripioare de pui",
  ],
  mainMenu: ["Pizza", "Paste", "Orez prăjit", "Tocăniță de legume"],
  openingHours: {
    Wednesday: {
      open: "12:00",
      close: "22:00",
    },
    Thursday: {
      open: "12:00",
      close: "22:00",
    },
    Friday: {
      open: "12:00",
      close: "23:00",
    },
    Saturday: {
      open: "11:00",
      close: "23:00",
    },
    Sunday: {
      open: "11:00",
      close: "22:00",
    },
  },
  orderDelivery: function (
    starterIndex = 1,
    mainIndex = 1,
    time = "22:00",
    address
  ) {
    console.log(
      `Comanda pentru livrare: ${this.starterMenu[starterIndex]} și ${this.mainMenu[mainIndex]}, 
        va fi livrată la adresa ${address} până la ora ${time}.`
    );
  },
  order: function (...items) {
    // exemplu de folosire a operatorului SPREAD
    console.log(`Comanda: ${items.join(", ")}`);
  },
};

// restaurant.orderDelivery(2, 1, "19:00", "Strada Principală, Nr. 10");
// restaurant.order("Pizza", "Paste", "Supă de legume");

// REST & SPREAD
const [pizza, paste, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, paste); // "Pizza", "Paste"
// console.log(otherFood); // 'Orez prăjit', 'Tocăniță de legume', etc

// REST, putem apela functia sum cu oricati parametri dorim,
// numbers compune toti parametrii intr-un array
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22

const values = [4, 5, 6, 7];
console.log(sum(...values)); // SPREAD

/*
    SPREAD VS REST , spread = descompune, rest = compune

    1. SPREAD , pentru ca e la dreapta de =
    2. REST , pentru ca e la stanga de =
*/

// 1 SPREAD
const arr = [3, 4];
const array = [1, 2, ...arr];
console.log(array);

// 2 REST
const [a, b, ...others] = array;
console.log(others);
