const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let unavailableProducts = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].quantityInStock == 0) {
      unavailableProducts.push(stockProducts[i].productName);
    }
  }
  return unavailableProducts;
};

module.exports = { getOutOfStockProducts };
