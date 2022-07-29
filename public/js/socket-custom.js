let socket = io()
socket.on('connect', () => {
    console.log('Conectado al servidor')
    
})
//Escuchar
socket.on('disconnect', () => {
    console.log('Se perdió la conexión al servidor')
    
})
//Escuchar
socket.on('mensajeServidor', (mensaje) => {
    console.log('Servidor: ',mensaje)
    
})

//Emitir
socket.emit('mensajeCliente', {
    usuario: 'ESPE',
    mensaje: 'Saludos'
}, (resp)=>{
    console.log(resp)
})