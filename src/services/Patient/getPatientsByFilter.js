const { findPatientsByFilter } = require('../../db/transactions');

const getPatientsByFilter = async (queryParams) => {
  const filter = {
    where: queryParams
  };
  const { rows: searchResults } = await findPatientsByFilter(filter);

  if (!searchResults.length) {
    const err = new Error('Could not find any results with search criteria.');
    err.code = 404;
    throw err;
  }

  return searchResults;
};

module.exports = getPatientsByFilter;