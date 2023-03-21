let prices = {
  banana: { color: 'yellow', price: 200, region: 'brazil' },
  orange: { color: 'light-red', price: 1500, region: 'california' },
  meat: { color: 'red', price: 3000, region: 'korea' },
};

const mola = Object.entries(prices);
const newArray = mola.map(([key, value]) => value);
console.log(newArray);
