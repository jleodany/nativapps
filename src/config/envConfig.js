const dotenv = require('dotenv');
dotenv.config();

const config = {
  dbName: process.env.PG_DB_NAME,
  dbPort: process.env.PG_DB_PORT,
  dbHost: process.env.PG_DB_HOST,
  dbUser: process.env.PG_DB_USER,
  dbPass: process.env.PG_DB_PASS,
  serverHost: process.env.HOST,
  serverPort: process.env.PORT,
}

module.exports = config;