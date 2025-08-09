const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/predictions', require('./routes/predictions'));
app.use('/api/charts', require('./routes/charts'));

app.listen(5000, () => console.log('Server running on port 5000'));