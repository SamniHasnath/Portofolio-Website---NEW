const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const { sendContact } = require('../controllers/contactController');

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: 'Too many requests, please try again in 15 minutes.' },
});

router.post('/', contactLimiter, sendContact);

module.exports = router;
