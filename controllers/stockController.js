const StockAlert = require('../models/StockAlert');

exports.createAlert = async (req, res) => {
  const alert = await StockAlert.create(req.body);
  res.status(201).send(alert);
};

exports.getAlerts = async (req, res) => {
  const alerts = await StockAlert.find();
  res.send(alerts);
};

exports.deleteAlert = async (req, res) => {
  try {
    const { id } = req.params;
    const alert = await StockAlert.findByIdAndDelete(id);

    if (!alert) {
      return res.status(404).json({ message: 'Alert not found' });
    }

    res.json({ message: 'Alert deleted successfully' });
  } catch (error) {
    console.error('Error deleting alert:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
