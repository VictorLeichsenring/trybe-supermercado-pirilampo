const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  return stockProducts.length;
};
module.exports = { getUniqueProductsAmount };
