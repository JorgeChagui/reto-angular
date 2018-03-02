var express = require('express');
var router = express.Router();
var creditoCtrl = require('../controllers/creditoCtrl');

router.post('/', creditoCtrl.createCredito);

module.exports = router;