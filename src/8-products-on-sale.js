const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  // Desenvolva seu código dentro dessa função...
  let productsFound = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].onSale) {
      let product = {
        description: stockProducts[i].description,
        formattedPrice: `R$ ${stockProducts[i].price.toFixed(2)}`,
        onSale: stockProducts[i].onSale,
      };
      productsFound.push(product);
    }
  }
  return productsFound;
};
module.exports = { getProductsOnSale };
