const express = require('express');
const router = express.Router();
const controller = require('../controller/test.controller');

router.get('/getdata', controller.getData);
router.get('/', controller.index);

module.exports = router;