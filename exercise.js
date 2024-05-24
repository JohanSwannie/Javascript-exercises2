// Swap variables

let number1 = 9;
let number2 = 4;

[number1, number2] = [number2, number1];

console.log(number1, number2);

// Use an Object map instead of if else

const getCar = (cars, series) => {
  return cars[series];
};

const carTypes = {
  A1: "Mercedes Benz",
  A2: "BMW",
  A3: "Volkswagen",
};

console.log(getCar(carTypes, "A1"));

// Better way to iterates through Objects

const sportTypes = {
  S1: "Tennis",
  S2: "Football",
  S3: "Swimming",
  S4: "Athletics",
  S5: "Rugby",
};

Object.entries(sportTypes).forEach(([key, value]) => {
  console.log(key, value);
});

// Calculate the total prices of stock in all objects

const stock = [
  {
    productName: "Socks",
    price: 12.5,
    amount: 20,
  },
  {
    productName: "Shoes",
    price: 99.5,
    amount: 15,
  },
  {
    productName: "hats",
    price: 7.5,
    amount: 45,
  },
];

let total = 0;

stock.forEach((item) => {
  total += item.amount * item.price;
});

console.log(`The total price sum of all stock is ${total}`);

// OR

const stockTotalPrice = stock.reduce(
  (prev, next) => (prev += next.amount * next.price),
  0
);

console.log(`The total price sum of all stock is ${total}`);

// Flatten an array

const array1 = [
  ["Thomas", ["James"]],
  ["Paul", ["Mary", ["Louis"]]],
];

const array2 = array1.flat(Infinity);

console.log(array2);

// Use console.table

const musicWorks = [
  {
    instrument: "Trumpet",
    price: 1785.0,
    year: 2014,
  },
  {
    instrument: "Guitar",
    price: 655.0,
    year: 2016,
  },
  {
    instrument: "Flute",
    price: 1100.0,
    year: 2019,
  },
];

console.table(musicWorks);

// Round numbers by removing the decimals

const clothes = [
  {
    product: "shirt",
    price: 59.99,
  },
  {
    product: "trouser",
    price: 80.5,
  },
  {
    product: "blazer",
    price: 119.45,
  },
];

const newClothes = clothes.map((item) => {
  return {
    product: item.product,
    price: ~~item.price,
  };
});

console.table(newClothes);

// Use filter

const carCollection = [
  {
    name: "Mercedes Benz",
    topSpeed: 330,
  },
  {
    name: "Mazda",
    topSpeed: 240,
  },
  {
    name: "Ford",
    topSpeed: 280,
  },
  {
    name: "BMW",
    topSpeed: 320,
  },
  {
    name: "Toyota",
    topSpeed: 290,
  },
  {
    name: "Ferarri",
    topSpeed: 380,
  },
  {
    name: "Nissan",
    topSpeed: 250,
  },
  {
    name: "Volkswagen",
    topSpeed: 270,
  },
  {
    name: "Volvo",
    topSpeed: 300,
  },
  {
    name: "Suzuki",
    topSpeed: 220,
  },
];

const speedyCars = carCollection
  .filter((car) => car.topSpeed > 300)
  .sort((a, b) => b.topSpeed - a.topSpeed);

console.table(speedyCars);
