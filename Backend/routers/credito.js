var express = require('express');
var router = express.Router();
var creditoCtrl = require('../controllers/creditoCtrl');

router.get('/', creditoCtrl.createCredito);

module.exports = router;