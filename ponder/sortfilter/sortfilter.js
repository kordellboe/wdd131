// sortfilter.js - cleaned and validated

// sample numbers
const nums = [4, 5, 3, 1];
console.log("sorted nums:", nums.slice().sort((a, b) => a - b));

// simple string list and sorts
const simpleList = [
  "oranges",
  "grapes",
  "lemons",
  "apples",
  "Bananas",
  "watermelons",
  "coconuts",
  "broccoli",
  "mango"
];

console.log("sorted simpleList:", simpleList.slice().sort());

const lowerlist = simpleList.map(function (fruit) {
  return fruit.toLowerCase();
});
console.log("sorted lowerlist:", lowerlist.slice().sort());

// filter example
const searchTerm = "an";
const filteredFruit = lowerlist.filter(function (fruit) {
  return fruit.includes(searchTerm);
});
console.log("filteredFruit:", filteredFruit);

// compare function for product objects
function compareFn(a, b) {
  if (a.productName < b.productName) {
    return -1;
  } else if (a.productName > b.productName) {
    return 1;
  }
  return 0;
}

const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

console.log("products sorted:", products.slice().sort(compareFn));

// animals array and searches
const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];

const nameQuery = "Lion";

const filteredAnimals = animals.filter(function (item) {
  return item.name.toLowerCase().includes(nameQuery.toLowerCase());
});
console.log("filteredAnimals:", filteredAnimals);

const traitQuery = "wild";

const filteredTraits = animals.filter(function (item) {
  return item.traits.some(function (trait) {
    return trait.toLowerCase().includes(traitQuery.toLowerCase());
  });
});
console.log("filteredTraits:", filteredTraits);
