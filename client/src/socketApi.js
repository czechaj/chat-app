import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("connecting");
  socket = io("http://localhost:3000/", {
    transports: ["websocket"],
    upgrade: false,
  });

  socket.on("connect", () => {
    console.log("connected");
  });
};

export const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message);
};

export const subscribeChat = (cb) => {
  if (!socket) return;

  socket.on("receive-message", (message) => {
    console.log("1 yeni mesaj:", message);
    cb(message);
  });
};

export const initMessages = (cb) => {
  if (!socket) return;

  socket.on("message-list", (messages) => {
    cb(messages);
  });
};
