// class EventEmiter
const EventEmitter = require('events');
// class Logger
const Logger = require('../logger-module/logger');
// object logger declared
const logger = new Logger();
// create event listner .on 
logger.on('messageLogged', (arg) => {
  console.log('listened something',arg);
});

logger.log('message')