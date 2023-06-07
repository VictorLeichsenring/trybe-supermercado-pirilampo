const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let scarceProducts = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].quantityInStock > 0 && stockProducts[i].quantityInStock <= 10) {
      scarceProducts.push(`${stockProducts[i].productName}: ${stockProducts[i].quantityInStock
      } unidades`)
    }
  }
  return scarceProducts;
};

module.exports = { getLowStockProducts };
