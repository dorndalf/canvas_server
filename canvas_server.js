var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http, {
  cors: {
    origin: ["http://localhost:3000", "https://hatespeech-canvas.onrender.com"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", function (socket3) {
  io.engine === io.eio;
  serverClients = Object.keys(io.engine.clients); //schreibt bei jedem join auf server die Verbundenen Sockets in ein Array
});

//---------------------------------------------------------- Textchat

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    io.emit("newMessage", message); //gibt aus dass wort richtig war
    console.log(message);
  });
});

http.listen(1333, function () {
  console.log("listening on *:1333");
});
