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

// io.emit("joined")
  socket.on("user_ready", (txt)=>{
    io.emit("joined", socket.id, txt, );
    
  })

});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});