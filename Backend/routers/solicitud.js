var express = require('express');
var router = express.Router();
var solicitudCtrl = require('../controllers/solicitudCtrl');

router.post('/', solicitudCtrl.createSolicitud);

module.exports = router;