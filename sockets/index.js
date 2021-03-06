const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors:{
    origin:['https://mixelixirsocket.vercel.app/'],
    allowedHeaders:['Access-Control-Allow-Origin'],
    credentials:true
  }
});

const PORT = process.env.PORT || 8888;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

// io.emit("joined")
  socket.on("user_ready", (txt, user)=>{
    io.emit("joined", user, txt);
  })

  socket.on("dropped_drink", (item)=>{
    console.log(item, 'item on the server')
    io.emit("dropped",item);
  })

});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});