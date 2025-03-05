const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cv4b7a9r01qn2ga96pmgcv4b7a9r01qn2ga96pn0"
const finnhubClient = new finnhub.DefaultApi()

finnhubClient.quote("AAPL", (error, data, response) => {
    console.log(data)
});