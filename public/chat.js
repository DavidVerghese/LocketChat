const socket = io.connect("http://localhost:3000/");
socket.on('typing', function (data) {
  feedback.innerHTML = `<p><em>` + data +
    ` is typing a message... </em></p>`;
});


// Query DOM 
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');


// Emit events
btn.addEventListener('click', function () {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

const feedback = document.getElementById('feedback');
message.addEventListener('keypress',
  function () {
    socket.emit("typing", handle.value);
  });
