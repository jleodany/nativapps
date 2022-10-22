const { Sequelize } = require('sequelize');

const { envConfig } = require('../config')

const db = new Sequelize(
  envConfig.dbName, envConfig.dbUser, envConfig.dbPass, {
    host: envConfig.dbHost,
    dialect: 'postgres',
    port: envConfig.dbPort,
  },
);

const connectDB = async (retries = 5) => {
  try {
    await db.authenticate();
  } catch (error) {
    if (retries === 0) {
      throw new Error(`DB connection error: ${error}`);
    }
    await new Promise(resolve => setTimeout(resolve, 5000))
    await connectDB(retries - 1);
  }
};

module.exports = { connectDB, db };