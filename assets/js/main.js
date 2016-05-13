var term = require('hypernal')();
term.tail=true
term.appendTo('#terminal');

// setup websocket with callbacks
var ws = new WebSocket('ws://localhost:8080/');
ws.onopen = function() {
  console.log('CONNECT');
};
ws.onclose = function() {
  console.log('DISCONNECT');
};
ws.onmessage = function(event) {
  term.write(event.data);
  term.write(" \n"); // empty line for hydernal to make a line break
};
