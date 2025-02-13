require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config')

// create el erver express
const app = express();

//configurar cors
app.use( cors() );

// db conection
dbConnection();

// rutas
app.get( '/', ( req, res) => {
    res.json({
        ok: true,
        msg: 'hola mundo'
    })
} );

app.listen( process.env.PORT, () =>{
    console.log('servidor corriendo en puerto '+ process.env.PORT);
});