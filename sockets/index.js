const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors:{
    origin:['http://localhost:3000'],
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

  const users = {}

  users[socket.id] = {left:0, top:0}

  io.emit("init_user", users);

  socket.on("user_ready", (text)=>{
    io.emit("joined", socket.id, text)
  })

  socket.on("disconnect", ()=>{
    delete users[socket.id]
  })

  socket.on("coords", (x,y)=>{
    // io.emit("update_coords", x, y)
    users[socket.id].left = x
    users[socket.id].top = y
    io.emit("init_user", users);
  })
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});