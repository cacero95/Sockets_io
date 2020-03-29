const { io } = require('../server');
io.on('connection', (client) => {
    io.emit('enviar_mensaje', {
        usuario: 'admin',
        mensaje: 'que mas admin'
    });

    client.on('disconnect', () => {
        console.log('user disconnect');
    });
    // escuchando el cliente
    client.on('enviar_mensaje', (data, callback) => {
        console.log(data);
        // con el broadcast se emite un evento a todos los usuarios
        client.broadcast.emit('enviar_mensaje', data);
        /**
         * if (data.usuario) {
            callback({
                res: 'TODO SALIO BIEN'
            })

        } else {
            callback({
                res: 'Todo salio mal'
            })
        }
         */
    })
})