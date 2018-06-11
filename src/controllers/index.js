const express = require('express');
const library = require('./library');

const router = express.Router();

const dashboard = require('./dashboard');
const login = require('./login.js');


router.get('/admin', login.get);
router.get('/dashboard', dashboard.get);
router.get('/library', library.get);
module.exports = router;
