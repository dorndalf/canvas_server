const { Server } = require("socket.io");
const port = process.env.PORT || 8080;
const io = new Server(port, {
  cors: {
    origin: [
      "*",
      "http://localhost:3000/form",
      "http://localhost:3000",
      "https://hatespeech-canvas.onrender.com",
      "https://hatespeech-canvas.onrender.com/form",
    ],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  io.engine === io.eio;
  const serverClients = Object.keys(io.engine.clients); //schreibt bei jedem join auf server die Verbundenen Sockets in ein Array
});

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    io.emit("newMessage", message); //gibt aus dass wort richtig war
    console.log(message);
  });
});
