// --- BACKEND ---
// class EventEmiter
const EventEmiter = require('events');
// object emitter declared
const emitter = new EventEmiter();

var url = 'http://mylogger.io/log';

function log(message){
  // send an HTTP request
  console.log(message);
  // raise event
  emitter.emit('messageLogged', {id:1, url:'.com'}); 
}

// --- INTERFACE ---
// torna a funcao log() acessivel a escopo externo (nivel global)
module.exports = log;
