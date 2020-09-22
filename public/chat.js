//Make connection
const socket = io.connect('http://localhost:3000')

// Query DOM
const message = document.getElementById('message')
const handle = document.getElementById('handle')
const btn = document.getElementById('send')
const messages = document.getElementById('messages')

// Emit event on submit
btn.addEventListener('click', function(e){
  e.preventDefault()
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  })
})


//Listen for events
socket.on('chat', function(data){
  messages.innerHTML += '<li>' + data.handle + ': ' + data.message + '</li>'
})

    // $(function () {
    //   var socket = io();
    //   $('form').submit(function(e){
    //     e.preventDefault(); // prevents page reloading
    //     socket.emit('chat message', $('#m').val());
    //     $('#m').val('');
    //     return false;
    //   });
    //   socket.on('chat message', function(msg){
    //     $('#messages').append($('<li>').text(msg));
    //   });
    // });