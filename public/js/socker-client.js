const lblOffline = document.querySelector('#lblOffline');
const lblOnline = document.querySelector('#lblOnline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    //console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});

socket.on('disconnect', () => {
   // console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
})

socket.on('enviar-mensaje', (mensaje)=> {
    console.log(mensaje);
})

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id:'123ABC',
        fecha: new Date().getTime()

    }
    socket.emit('enviar-mensaje', payload, (id) =>{
        console.log('Desde el server', id);
    });
})