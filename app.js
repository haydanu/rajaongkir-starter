const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const dotRoutes = require('./api/routes/provinces');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('combined'));

//home page
app.get('/', (req, res) => {
  const localTime = (new Date()).toLocaleTimeString();

  res.status(200).send(`hello DOT! server run start on ${localTime}.`)
});

//Routes to handle request
app.use('/dot', dotRoutes);

// catch 404
app.use((req, res, next) => {
  const error = new Error('this route is not available, please back to home');
  error.status = 404;
  next(error);
});

// error handler
app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
