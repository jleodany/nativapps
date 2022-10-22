const { ValidationError, ValidationErrorItem } = require('sequelize');

const errorHandler = (err, _, res, __) => {
  if (err && err instanceof ValidationError) {
    res.status(500).json({
      message: 'Please check the data you are providing.',
      errors: err.message.split(',\n'),
    });
    return;
  } else if (err && err.code) {
    res.status(err.code).json({ message: err.message });
    return;
  }

  res.status(500).json({ message: 'Something unexpected happened' })
}

module.exports = errorHandler;