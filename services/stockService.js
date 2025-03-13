const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.STOCK_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

exports.getStockPrice = (symbol) => {
  return new Promise((resolve, reject) => {
    finnhubClient.quote(symbol, (error, data, response) => {
      if (error) {
        return reject(error);
      }
      resolve(data.c);
    });
  });
};
