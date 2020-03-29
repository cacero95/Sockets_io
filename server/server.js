const express = require('express');
// mantiene sesiones activas con los clientes
// para las conexiones con el backend es con la siguiente url
// http://localhost:3000/socket.io/socket.io.js
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
let server = http.createServer(app);
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
// IO = esta es la comunicacion entre el backend
module.exports.io = socketIO(server);
// dedico todo el archivo de sockets a la funcionalidad del socket usando el require
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});