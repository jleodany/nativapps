const { createPatient, findPatientsByFilter } = require('../../db/transactions');

const createNewPatient = async (patientData) => {
  const filter = {
    where: { documentId: patientData.documentId }
  }
  const { rows: existingPatient } = await findPatientsByFilter(filter);

  if (existingPatient.length) {
    const err = new Error('Patient already registered.');
    err.code = 409
    throw err
  }

  const newPatient = await createPatient(patientData)

  return newPatient;
};

module.exports = createNewPatient;