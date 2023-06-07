const stockProducts = require('./data.json');

const getProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...
  let totalProducts = 0;
  for (let i = 0; i < stockProducts.length; i += 1) {
    totalProducts += stockProducts[i].quantityInStock;
  }
  return totalProducts;
};

module.exports = { getProductsAmount };
