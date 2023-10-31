const express = require('express');
const router = express.Router();
const calculadoraController = require('../controllers/calculadoraController');

router.get('/', calculadoraController.mostrarFormulario);
router.post('/calcular', calculadoraController.calcular);

module.exports = router;
