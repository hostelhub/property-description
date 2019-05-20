const mongoose = require('mongoose');

const mongoUri = 'mongodb://database/hostelsDB';

mongoose.connect(mongoUri, { useNewUrlParser: true });

const db = mongoose.connection;

module.exports = db;
