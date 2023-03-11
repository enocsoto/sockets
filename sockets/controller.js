
const socketController = (socket) => {

    console.log('cliente conectado ', socket.id);
    socket.on('disconnect', () => {
       console.log('Client Disconected', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {

        const id = 1234;
        callback(id);

        socket.broadcast.emit('enviar-mensaje', payload);
    });
};

module.exports = {
    socketController
}