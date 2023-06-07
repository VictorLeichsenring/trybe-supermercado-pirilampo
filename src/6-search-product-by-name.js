const stockProducts = require('./data.json');

const searchProductByName = (searchName) => {
  // Desenvolva seu código dentro dessa função...
  let productFound = {};
  if (searchName == null) {
    return null;
  } else {
    for (let i = 0; i < stockProducts.length; i += 1) {
      if (searchName === stockProducts[i].productName) {
        productFound.description = stockProducts[i].description;
        productFound.formattedPrice = `R$ ${stockProducts[i].price.toFixed(2)}`;
        return productFound;
      }
    }
    if (Object.keys(productFound).length === 0) {
      return null;
    }
  }
};
module.exports = { searchProductByName };
