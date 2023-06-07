const stockProducts = require('./data.json');

const searchProductsByBrand = (brand) => {
  // Desenvolva seu código dentro dessa função...
  let productsFound = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    if (brand === stockProducts[i].brand) {
      let product = {
        description: stockProducts[i].description,
        formattedPrice: `R$ ${stockProducts[i].price.toFixed(2)}`,
      };
      productsFound.push(product);
    }
  }
  return productsFound;
};

module.exports = { searchProductsByBrand };
