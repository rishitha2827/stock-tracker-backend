const cron = require('node-cron');
const StockAlert = require('../models/StockAlert');
const { getStockPrice } = require('../services/stockService');
const { sendEmail } = require('../services/emailService');

cron.schedule('*/1 * * * *', async () => {
  const alerts = await StockAlert.find({ status: 'active' });
  for (const alert of alerts) {
    console.log(alert.symbol);
    const price = getStockPrice(alert.symbol);
    console.log(price);
    if (price >= alert.targetPrice) {
      await sendEmail(alert.email, 'Stock Alert', `${alert.symbol} has reached ${price}`);
      alert.status = 'notified';
      alert.lastNotifiedAt = new Date();
      await alert.save();
    }
  }
});
