"use strict";

var express = require('express');

var router = express.Router();

var bicicletaController = require('../../controllers/api/bicicletaControllerAPI');

router.get('/', bicicletaController.bicicleta_list);
router.post('/create', bicicletaController.bicicleta_create);
router["delete"]('/delete', bicicletaController.bicicleta_delete);
module.exports = router; //No me cuadra
//# sourceMappingURL=bicicletas.dev.js.map
