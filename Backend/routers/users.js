var express = require('express');
var router = express.Router();
var usuarioCtrl = require('../controllers/usuarioCtrl');

console.log("Users Router");

router.post('/', usuarioCtrl.createUser);
router.get("/", usuarioCtrl.findAll);
router.get("/:cedula", usuarioCtrl.findByCedula);
router.post("/:id", usuarioCtrl.findById);

module.exports = router;
