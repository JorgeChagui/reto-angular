var express = require('express');
var router = express.Router();
var creditoCtrl = require('../controllers/creditoCtrl');

router.get('/', creditoCtrl.listarCredito);

module.exports = router;