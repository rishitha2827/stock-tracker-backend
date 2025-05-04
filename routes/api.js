const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');
const { getStockPrice } = require('../services/stockService');

router.post('/alerts', stockController.createAlert);
router.get('/alerts', stockController.getAlerts);
router.delete('/alerts/:id', stockController.deleteAlert);
router.get('/alerts/:symbol', async (req, res) => {
    return res.status(200).json(await getStockPrice(req.params.symbol));
});

module.exports = router;
