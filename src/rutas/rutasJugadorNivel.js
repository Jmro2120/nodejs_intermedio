const express = require('express');
const enrutador = express.Router();
const jugadorNivelControlador = require('../controladores/jugadorNivelControlador');

enrutador.post('/registrarPuntaje',jugadorNivelControlador.registrarPuntaje);
enrutador.get('/obtener/:cedula',jugadorNivelControlador.obtenerPuntajePorJugador);

//Asi mandaria la cedula como parametro
//  enrutador.get('/obtener/:cedula',nivelControlador.obtenerNiveles);

module.exports = enrutador;