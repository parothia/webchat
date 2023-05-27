const webSocket = require("ws");

const wss = new webSocket.Server({
  port: 9876,
});

wss.on("connection", function (webSocket) {
  // webSocket.send("hello from the webSocket server");
  webSocket.on("message", function (data) {
    webSocket.send(data);
  });
});
