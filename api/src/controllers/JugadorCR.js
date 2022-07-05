const {Jugador} = require('../db.js')

const jugadorDB = ()=>{
    try {
        return Jugador.findAll()
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    jugadorDB
}