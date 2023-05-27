const url = `ws://localhost:9876/websocket`;
const server = new WebSocket(url);

const messages = document.getElementById("messages");
const message = document.getElementById("message-input");
const btn = document.getElementById("message-btn");

btn.disabled = true;
btn.addEventListener("click", sendMessage, false);

function sendMessage() {
  const text = message.value;
  server.send(text);
}
server.onmessage = async function (event) {
  let msg = event.data;
  const newMessage = document.createElement("div");
  newMessage.innerText = msg;
  messages.appendChild(newMessage);
};
server.onopen = function () {
  btn.disabled = false;
  sendMessage();
};
