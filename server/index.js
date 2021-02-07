const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dataRouter = require('./DataRouter');

config = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
  
  const connect = mongoose.connect("mongodb://localhost:27017/covid", config);
  
  connect
    .then((db) => {
      console.log("Connected correctly to server");
    })
    .catch((err) => {
      console.log(err);
    });

const app = express();
app.use(cors())
const port = 3100;

app.all('*', (req, res, next) => next());
app.use('/covid-data', dataRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});