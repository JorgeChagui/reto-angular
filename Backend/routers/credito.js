var express = require('express');
var router = express.Router();
var creditoCtrl = require('../controllers/creditoCtrl');

router.get('/:id', creditoCtrl.listarCredito);

module.exports = router;