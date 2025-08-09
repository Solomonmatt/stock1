const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post('/google', async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    let user = await User.findOne({ googleId: payload.sub });
    if (!user) {
      user = new User({
        googleId: payload.sub,
        oauthToken: token,
        tokenExpires: new Date(payload.exp * 1000),
        referralCode: Math.random().toString(36).substring(7),
      });
      await user.save();
    }
    res.json({ success: true, user });
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
});

module.exports = router;