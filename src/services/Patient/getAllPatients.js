const { findAllPatients } = require('../../db/transactions');

const getAllPatients = async () => {
  const patientsResult = await findAllPatients();

  if (!patientsResult.length) {
    const err = new Error('No patients registered.');
    err.code = 404;
    throw err;
  }

  return patientsResult
};

module.exports = getAllPatients;