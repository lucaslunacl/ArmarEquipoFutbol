const { Router } = require('express');
const jugadorRoute = require('./jugador')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/jugadores', jugadorRoute)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
