var socket = io();
socket.on('connect', function() {
    // el client estara pendiente a todos los cambios en backend 
    console.log('Connected to the server')
});
socket.on('disconnect', function() {
    console.log('lost connection');
});
// para clasificar la creacion de los eventos se usa los emit
// mientras que los on son escuchar eventos
socket.emit('enviar_mensaje', {
    usuario: 'jajaj',
    mensaje: 'Hi world'
}, function(resp) {
    console.log(resp);
});
socket.on('enviar_mensaje', function(data) {
    console.log(data);
})