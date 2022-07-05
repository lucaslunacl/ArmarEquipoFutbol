const { Router } = require('express');
const axios = require('axios')
const {jugadorDB} = require('../controllers/JugadorCR.js')
const {Jugador} = require('../db.js')

const router = Router();

//RUTA GET //

router.get('/', async (req, res,next) => {
    let jugador = await jugadorDB()
    try {
        res.status(200).json(jugador)
    } catch (error) {
        console.error('ERROR' + error.message)
        
    }
})


//RUTA POST //

router.post('/', async (req, res, next) =>{
    try {
        const {name , posicion} = req.body
        const newPlayer = await Jugador.create({
            name,
            posicion
        })
        res.json(newPlayer)

    } catch (error) {
        next(error)
        
    }
})

// RUTA DELETE 

router.delete('/:id', async (req, res, next) =>{
    const {id} = req.params
    try {
        if(id.includes('-')){
            const borrarJugador = await Jugador.destroy({
                where: {id: id}
            })
            res.send(200)
        }else{
            res.status(404).send('ERROR, no se pudo borrar')
        }
    } catch (error) {
        next(error)
    }
})

// RUTA PUT

router.put('/', async (req, res, next) =>{
    const {id} = req.body
    try {
        if(id){
            const actualizarJugador = await Jugador.findByPk(id)
            await actualizarJugador.update()
            await actualizarJugador.save()
            res.send('El jugador' + actualizarJugador + 'se modificó correctamente')
        }
    } catch (error) {
     next(error)   
    }
})


module.exports = router;
