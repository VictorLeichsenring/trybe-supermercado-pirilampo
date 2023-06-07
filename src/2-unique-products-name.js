const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  // Desenvolva seu código dentro dessa função...
  let productsList = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    productsList.push(stockProducts[i].productName);
  }
  return productsList;
};
module.exports = { getUniqueProductsName };
