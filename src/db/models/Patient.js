const Sequelize = require('sequelize');
const { db } = require('../connect');

const Patient = db.define('patients', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  documentId: {
    unique: true,
    type: Sequelize.STRING(20),
    validate: {
      is: /^[0-9]*$/
    },
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
  },
  phone: {
    type: Sequelize.STRING(20),
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    onUpdate: Sequelize.NOW
  },
});

module.exports = Patient;