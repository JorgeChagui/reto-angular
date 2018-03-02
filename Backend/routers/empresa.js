var express = require('express');
var router = express.Router();
var empresaCtrl = require('../controllers/empresaCtrl');
console.log("Empresas Router");

router.post('/', empresaCtrl.createEmpresa);

module.exports = router;