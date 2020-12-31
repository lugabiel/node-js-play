// class EventEmiter
const EventEmiter = require('events');
// object emitter declared
const emitter = new EventEmiter();

// create event listner .on 
emitter.on('messageLogged', (arg) => {
  console.log('listened something',arg);
});
// create a logger module
const log = require('../logger-module/logger');
log('message');
