const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();

myEmitter.on('printC', () => console.log('Event print command'));


myEmitter.emit('printC');