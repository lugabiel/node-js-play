// --- BACKEND ---
// class EventEmiter
const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message){
    // send an HTTP request
    console.log(message);
    // raise event
    this.emit('messageLogged', {id:1, url:'.com'}); 
  }
}


// --- INTERFACE ---
// torna a funcao log() acessivel a escopo externo (nivel global)
module.exports = Logger;
