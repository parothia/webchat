const url = `ws://localhost:9876/websocket`;
const server = new WebSocket(url);

const messages = document.getElementById("messages");
const message = document.getElementById("message-input");
const btn = document.getElementById("message-btn");

btn.disabled = true;
btn.addEventListener("click", sendMessage, false);

function sendMessage() {
  const text = message.value;
  generateMessageEntry(text, "client");
  server.send(text);
}

server.onmessage = function (event) {
  let { data } = event;
  generateMessageEntry(data, "server");
};

function generateMessageEntry(msg, type) {
  const newMessage = document.createElement("div");
  newMessage.innerText = `${type} says: ${msg}`;
  messages.appendChild(newMessage);
}

server.onopen = function () {
  btn.disabled = false;
  sendMessage();
};
