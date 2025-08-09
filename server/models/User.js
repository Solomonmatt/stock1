const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: String,
  oauthToken: String,
  tokenExpires: Date,
  subscription: { type: String, default: 'free' },
  visits: { type: Number, default: 0 },
  referralCode: String,
});

module.exports = mongoose.model('User', userSchema);