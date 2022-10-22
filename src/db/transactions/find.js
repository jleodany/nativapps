const { Patient } = require('../models');

const findPatientsByFilter = async (filter) => {
  return Patient.findAndCountAll(filter)
    .catch(err => {
      throw err;
    });
}

const findAllPatients = async () => {
  return Patient.findAll()
    .catch(err => {
      throw new Error(err);
    });
}

module.exports = { findPatientsByFilter, findAllPatients };