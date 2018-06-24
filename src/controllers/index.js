const express = require('express');
const router = express.Router();
const dashboard = require('./dashboard');
const GSG_Library = require('./GSG_Library');


router.get('/dashboard', dashboard.get);
router.get('/GSG_Library', GSG_Library.get);
router.post('/GSG_Library', GSG_Library.post);

module.exports = router;
