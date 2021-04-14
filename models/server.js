const express = require('express')
const cors = require('cors')

const app = express()

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersRoute = '/api/v1/users';

        // Middlewares
        this.middlewares();
        
        // Rutas
        this.routes();
    }

    middlewares() {
        // cors
        this.app.use(cors());

        // Lectura y parse del body
        this.app.use( express.json() );

        // Directorio público.
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.usersRoute , require('../routes/users.routes'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log( 'Servidor lanzado en puerto', this.port );
        })
    }

}

module.exports = Server;