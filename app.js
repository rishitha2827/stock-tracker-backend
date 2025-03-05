require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const apiRoutes = require('./routes/api');
require('./jobs/stockMonitor');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(console.error);

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(3010, () => console.log('Server running on port 3010'));
