const express = require('express');


// App setup
const app = express();
const server = app.listen(3000, function () {
  console.log('listening to requests on port 3000')
});

const socket = require('socket.io');
const io = socket(server);
io.on('connection', function(socket) {
  console.log('made socket connection', socket.id);

  socket.on('chat', function (data) {
    io.sockets.emit('chat',data)
  });
  socket.on('typing', function (data) {
    socket.broadcast.emit("typing", data);
  });
});


 


// Static files
app.use(express.static('public'));
