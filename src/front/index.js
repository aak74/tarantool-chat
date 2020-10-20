let socket = new WebSocket("ws://127.0.0.1/ws");

document.forms.message.onsubmit = function() {
  socket.send(this.message.value);
  document.getElementById('message').value = '';
  message
  return false;
};

socket.onmessage = function(event) {
  let message = JSON.parse(event.data);

  let messageElem = document.createElement('div');
  messageElem.textContent = message.data + ' | from: ' + message.author;
  
  document.getElementById('messages').prepend(messageElem);
}