const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
   // Desenvolva seu código dentro dessa função...
   return stockProducts.length;
}

console.log(getUniqueProductsAmount())
module.exports = { getUniqueProductsAmount };
