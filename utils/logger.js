const { createLogger, transports } = require('winston');

const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'app.log' })
  ]
});

module.exports = logger;
