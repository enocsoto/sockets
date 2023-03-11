const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.paths = {}

        //Middlewares
        this.middlewares();

        //rutas de mi apliacion
        this.routes();

        this.socket();
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //directorio publico
        this.app.use(express.static('public'));

    }

    routes() {

    }

    socket() {

        this.io.on('connection', socketController);
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log(`Server listen on port ${this.port}`);
        });
    }
}

module.exports = Server;