const express = require('express');

const router = express.Router();

const dashboard = require('./dashboard');
const login = require('./login.js');
const GSG_Library = require('./GSG_Library');

router.get('/admin', login.get);
router.get('/dashboard', dashboard.get);
router.get('/GSG_Library', GSG_Library.get);
module.exports = router;
