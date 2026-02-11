// Why Event Module is important?  ->  Because Node internally uses events for:
//  -HTTP requests
//  -Streams
//  -File system
//  -Sockets
//  -APIs

const EventEmitter = require("events");
const emitter = new EventEmitter();

//define
emitter.on("eventName", (userName) => {
  console.log(`When this event is call, it triggers this callBack Function  -- ${userName}`);
});

//calls/triggers
emitter.emit("eventName", "YASH");