import { Server } from "socket.io";

const http = require("http").Server(app);
const port = process.env.PORT || 1333;
const io = new Server({
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
// const io = require("socket.io")(http, {
//   cors: {
//     origin: [
//       "*",
//       "http://localhost:3000/form",
//       "http://localhost:3000",
//       "https://hatespeech-canvas.onrender.com",
//       "https://hatespeech-canvas.onrender.com/form",
//     ],
//     methods: ["GET", "POST"],
//   },
// });

io.on("connection", (socket) => {
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

io.listen(port, () => {
  console.log(`listening on port *${port}`);
});
