// Dependencies
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Route to index.html
app.get('/', function(req, res){
  res.sendFile(__dirname +'/index.html');
});

// listening for user connection and  disconnection event for incoming sockets, and log to console.
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
});

// server connection to localhost:3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});
