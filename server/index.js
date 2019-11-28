const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const app = express();
const router = require('./router');

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);

    /* const error = true;
    if (error) {
      callback({ error: 'error' });
    } */
  });
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

app.use(router);

server.listen(PORT, () => console.log(`server started on${PORT}`));
