const mongoose = require('mongoose');
const db = require('./index.js');

const hostelSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  description: String,
  photos: Array,
});

const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports = Hostel;
