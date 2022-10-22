const { createPatient } = require('./create');
const { findPatientsByFilter, findAllPatients } = require('./find');

module.exports = { createPatient, findPatientsByFilter, findAllPatients };