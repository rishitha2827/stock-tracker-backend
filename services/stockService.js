const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.STOCK_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

exports.getStockPrice = async (symbol) => {
  var stockPrice;
  finnhubClient.quote(symbol, (error, data, response) => {
    stockPrice = data.c;
  });
  return stockPrice;
};
