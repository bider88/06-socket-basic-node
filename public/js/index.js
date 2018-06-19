var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Conexión perdida con el servidor');
})

// send information
socket.emit('sendMessage', {
    user: 'Irvig Didier',
    message: 'Hello world'
}, function(res) {
    console.log('res server:', res);
})

// listen information
socket.on('sendMessage', function(msg) {
    console.log('servidor', msg);
})