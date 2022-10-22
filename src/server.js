const Express = require('express');
const bodyParser = require('body-parser');

require('./db/models');
const { errorHandler } = require('./middlewares');
const { patientRouter } = require('./services');
const { connectDB, db } = require('./db/connect');
const { envConfig } = require('./config');

const host = envConfig.serverHost || 'localhost';
const port = envConfig.serverPort || 4000;
const app = Express();

app.use(bodyParser.json());
app.use('/patient', patientRouter);

app.get('/', async (_, res) => res.status(200).send('Server is working!'));

app.use(errorHandler)

connectDB()
  .then(() =>
    db.sync()
      .then(() =>
        app.listen(port, console.log(`Server is up at ${host}:${port}`))
      )
  );