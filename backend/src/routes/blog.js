const express = require('express');
const router = express.Router();
const { getPosts } = require('../controllers/blogController');

router.get('/', getPosts);

module.exports = router;
