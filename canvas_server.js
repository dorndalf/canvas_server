const { Server } = require("socket.io");
const port = process.env.PORT || 8080;
const io = new Server(port, {
  cors: {
    origin: [
      "*",
      "https://www.twobaloons.online",
      "https://www.twobaloons.online/config",
      "https://www.twobaloons.online/history",
      "http://localhost:3000/form",
      "http://localhost:3000/config",
      "http://localhost:3000/history",
      "http://localhost:3000",
      "https://hatespeech-canvas.onrender.com",
      "https://hatespeech-canvas.onrender.com/form",
    ],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  io.engine === io.eio;
  socket.on("message", (message) => {
    io.emit("newMessage", message);
  });
  socket.on("sleep", (toggle) => {
    io.emit("sleep", toggle);
  });
});
