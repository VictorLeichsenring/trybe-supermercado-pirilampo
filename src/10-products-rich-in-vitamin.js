const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  // Desenvolva seu código dentro dessa função...
  let productsWithVitamin = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].nutritionalInfo.vitamins) {
      let product = {
        description: stockProducts[i].description,
        formattedPrice: `R$ ${stockProducts[i].price.toFixed(2)}`,
      };
      let vitaminsList = [];
      let quantVitaminas = Object.keys(stockProducts[i].nutritionalInfo.vitamins).length;
      for (let iVitamin = 0; iVitamin < quantVitaminas; iVitamin += 1) {
        let chave = Object.keys(stockProducts[i].nutritionalInfo.vitamins)[iVitamin];
        let valor = Object.values(stockProducts[i].nutritionalInfo.vitamins)[iVitamin];
        vitaminsList.push(`${chave} - ${valor}`);
      }
      product.vitaminsInformation = vitaminsList;
      productsWithVitamin.push(product);
    }
  }
  return productsWithVitamin;
};
module.exports = { getProductsRichInVitamin };
