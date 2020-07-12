module.exports = () => {
  const { parsed: envConfig } = require('dotenv').config({ path: `${__dirname}/../.env` });
  const env = envConfig && envConfig.NODE_ENV || process.env.NODE_ENV || 'development';
  const config = require(`${__dirname}/../config/config.json`)[env];

  return config;
};
