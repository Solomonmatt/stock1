const express = require('express');
const router = express.Router();
const Prediction = require('../models/Prediction');
const axios = require('axios');

router.post('/', async (req, res) => {
  const { symbol, date, price } = req.body;
  const prediction = new Prediction({
    user: 'mock-user-id', // Replace with actual user ID from auth middleware
    symbol,
    date,
    price,
  });
  await prediction.save();

  // Schedule accuracy check
  const checkDate = new Date(date);
  setTimeout(async () => {
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
      );
      const actualPrice = response.data.c;
      prediction.accuracy = 100 - Math.abs((actualPrice - price) / actualPrice * 100);
      await prediction.save();
    } catch (error) {
      console.error('Error checking accuracy:', error);
    }
  }, checkDate - Date.now());

  res.json(prediction);
});

module.exports = router;