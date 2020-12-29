const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;

io.on('connection', (socket) => {
  console.log('a user connected :D');
  socket.on('messages', (data) => {
    let messageObj = {
      user: {
        _id: socket.id,
        userName: data.userName,
      },
      text: data.message,
      _id: new Date() + socket.id,
      createAt: new Date(),
    };
    console.log(messageObj);
    io.emit('messages', {messages: messageObj});
  });
});

server.listen(port, () => console.log('Server runing on port' + port));
