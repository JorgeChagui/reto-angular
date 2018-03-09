var express = require('express');
var router = express.Router();
var creditoCtrl = require('../controllers/creditoCtrl');

router.get('/:id', creditoCtrl.listarCredito);
router.get("/", creditoCtrl.Valor);

module.exports = router;