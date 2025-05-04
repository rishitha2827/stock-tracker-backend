const redisClient = require('../utils/redis');
const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.STOCK_API_KEY;

const finnhubClient = new finnhub.DefaultApi();

exports.getStockPrice = async (symbol) => {
  const cacheKey = `stock:${symbol.toUpperCase()}`;

  try {
    const cachedPrice = await redisClient.get(cacheKey);

    if (cachedPrice) {
      console.log(`✅ Cache hit for ${symbol}`);
      return parseFloat(cachedPrice);
    }

    return new Promise((resolve, reject) => {
      finnhubClient.quote(symbol, async (error, data, response) => {
        if (error) {
          console.error('❌ Finnhub API error:', error);
          return reject(error);
        }

        const price = data.c;

        if (price) {
          await redisClient.set(cacheKey, price.toString(), { ex: 55 });
          console.log(`🚀 Price for ${symbol} fetched and cached`);
        }

        resolve(price);
      });
    });
  } catch (err) {
    console.error('❌ Redis or API error:', err);
    throw err;
  }
};
