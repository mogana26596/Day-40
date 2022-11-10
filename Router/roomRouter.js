const express = require('express');
const router = express.Router();
const hallModule = require('../Module/roomModule');

router.post('/create', hallModule.createroom);

router.get('/get', hallModule.getroom);

module.exports = router;