const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
//configuramos al socket y al express para que trabajen juntos en el server
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//inicializamos el server IO(esta es la coneccion directa del backend)
//enviamos al io
module.exports.io = socketIO(server);

//recibomos la funcion del io 
require('./sockets/socket');

//escuchamos al servidor
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});