const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  symbol: String,
  date: Date,
  price: Number,
  accuracy: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Prediction', predictionSchema);