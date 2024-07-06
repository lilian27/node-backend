require('dotenv').config();

const mongose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongose.connect( process.env.DB_CNN )
        console.log('bd online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar BDD')
    }
}

module.exports = {
    dbConnection
}