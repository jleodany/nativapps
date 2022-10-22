const Express = require('express');

const getAllPatients = require('./getAllPatients')
const getPatientsByFilter = require('./getPatientsByFilter')
const createNewPatient = require('./createNewPatient')
const router = Express.Router();

router.get('/', (_, res, next) => getAllPatients()
  .then(data => res.json(data))
  .catch(next)
);

router.post('/', async (req, res, next) => {
  return createNewPatient(req.body)
    .then(data => res.json(data))
    .catch(next);
});

router.get('/search', (req, res, next) => {
  getPatientsByFilter(req.query)
    .then(data => res.json(data))
    .catch(next)
  }
);

module.exports = router;