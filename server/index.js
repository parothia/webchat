const webSocket = require("ws");

const wss = new webSocket.Server({
  port: 9876,
});

wss.on("connection", function (ws) {
  // webSocket.send("hello from the webSocket server");
  ws.on("message", function (data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === webSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
