const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  // Desenvolva seu código dentro dessa função...
  let productsFound = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].allergyOrIntolerance) {
      let product = {
        description: stockProducts[i].description,
        formattedPrice: `R$ ${stockProducts[i].price.toFixed(2)}`,
      };
      let mensagem = 'Pode conter:';
      for (let iAviso = 0; iAviso < stockProducts[i].allergyOrIntolerance.length; iAviso += 1) {
        mensagem += ` ${stockProducts[i].allergyOrIntolerance[iAviso]}`;
      }
      product.allergyOrIntoleranceMessage = mensagem;
      productsFound.push(product);
    } else {
      let product = {
        description: stockProducts[i].description,
        formattedPrice: `R$ ${stockProducts[i].price.toFixed(2)}`,
      };
      productsFound.push(product);
    }
  }
  return productsFound;
};
module.exports = { getProductsWithAllergyOrIntoleranceInfo };
