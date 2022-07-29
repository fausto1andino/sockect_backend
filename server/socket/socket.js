const {io} = require('../server')
io.on('connection', (client) => {
    console.log('Usuario conectado')

    client.emit('mensajeServidor', {
        usuario: 'Administrador',
        mensaje: 'Bienvenidos a la aplicación'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    client.on('mensajeCliente', (data, callback) => {
        console.log(data)

        client.broadcast.emit('mensajeCliente', data)
      /*  if(mensaje.usuario){
            callback({
                resp: 'Todo salio bien'
            }) 

        }else{
            callback({
                resp: 'Todo salio mal'
            }) 
        }*/
    })
})
