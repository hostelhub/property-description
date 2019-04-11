/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const Hostel = require('../database/Hostel.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/hostels/:Id', express.static(`${__dirname}/../client/dist`));
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/api/hostels/:id/photos', (req, res) => {
  Hostel.find({ _id: req.params.id })
    .then((results) => {
      res.send(results);
    });
});

app.listen(3001, () => {
  console.log('listening on port 3001');
});
