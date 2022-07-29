const httpServer = require('http').createServer()
const socketIO = require('socket.io')(httpServer)

socketIO.on('connection', function (client) {
  console.log('Connected...', client.id);

//Se envia el mensjae total
  client.on('message', function name(data) {
    console.log(data);
    socketIO.emit('message', data);
  })

//Se envia un mensaje al momento del cierre de la aplicacion 
  client.on('disconnect', function () {
    console.log('Disconnected...', client.id);
  })

//Al momento de ocurrir un error se envia el log del error al servidor
  client.on('error', function (err) {
    console.log('Error detected', client.id);
    console.log(err);
  })
})

var port = process.env.PORT || 3000;
httpServer.listen(port, function (err) {
  if (err) console.log(err);
  console.log('Listening on port', port);
});