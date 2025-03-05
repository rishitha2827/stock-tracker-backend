const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

router.post('/alerts', stockController.createAlert);
router.get('/alerts', stockController.getAlerts);
router.delete('/alerts/:id', stockController.deleteAlert);

module.exports = router;
