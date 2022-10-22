const { Patient } = require('../models');

const createPatient = async (patientData) => {
  return Patient.create(patientData)
    .catch(err => {
      throw err;
    });
}

module.exports = { createPatient };