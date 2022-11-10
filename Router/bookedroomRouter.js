const express = require('express');
const router = express.Router();
const bookedModule = require('../Module/bookedroomModule');

router.post('/create', bookedModule.createbookedroom);

router.get('/get', bookedModule.getbookedroom);

module.exports = router;