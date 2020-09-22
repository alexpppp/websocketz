const express = require('express')
const socket = require('socket.io')

// App setup
const app = express()
const server = app.listen(3000, () => {
  console.log('listening on *:3000')
})

// static files
app.use(express.static('public'))

// Socket setup
var io = socket(server);

io.on('connection', (socket) => {
  console.log("made socket connection", socket.id)
  // on event 'chat message' coming into server.. do this function
  socket.on('chat', (data) => {
    io.sockets.emit('chat', data)
  });
});

