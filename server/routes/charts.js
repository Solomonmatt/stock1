const express = require('express');
const router = express.Router();
const Prediction = require('../models/Prediction');

router.get('/', async (req, res) => {
  const charts = await Prediction.find().sort({ accuracy: -1 }).limit(10);
  res.json(charts);
});

module.exports = router;