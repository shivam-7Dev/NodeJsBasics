const EventEmitter = require("node:events");
//events module returns a class called EventEmitter which encapsulate functionality to emmit event and respond to it

const event = new EventEmitter();

//we want to respond to a custom event called order-pizza
event.on("customEvent", () => console.log("event happened"));

//firing the event . Note you should first and event listner before firing an event
event.emit("customEvent");

/**
 * Event Registration => Event Triggering => Callback Execution
 * 
 * Events modules allows us to work with events in Node.js
 * An event is an action or an occurance that has happened in our applicarion that we can respont to for example
     1. expiration of a timer.
     2. click of a button.
     3. hover of mouse.
     4. promise resolution i.e calling of resolve( ) method
     5. rejection of a promise i.e calling of reject( ) method

 * some examples of events in node are

 * 1.'data' Event: This event is crucial when working with streams in Node.js. It's emitted when data is available to be read from a readable stream.
        const fs = require('fs');
        const readStream = fs.createReadStream('file.txt');

        readStream.on('data', (chunk) => {
        console.log(`Received ${chunk.length} bytes of data.`);
        });

 * 2. 'error' Event: This event is emitted when an error occurs. It's important for error handling in Node.js applications.

        const fs = require('fs');
        const file = 'file.txt';

        fs.readFile(file, (err, data) => {
        if (err) {
            console.error('An error occurred:', err);
            return;
        }

        console.log('File contents:', data);
        });

 *3. 'request' Event: In the context of HTTP servers in Node.js, this event is emitted when a new HTTP request is received.
        const http = require('http');

        const server = http.createServer((req, res) => {
        console.log('A new request has been received.');
        // Handle the request...
        });

        server.listen(3000, () => {
        console.log('Server is running on port 3000');
        });

 *4.'close' Event: This event is emitted when a server closes its underlying connections.
        const server = http.createServer((req, res) => {
        // Handle the request...
        });

        server.on('close', () => {
        console.log('Server closed');
        });

 5. finish' Event: Used with writable streams, this event is emitted when all data has been flushed to the underlying system.
        const fs = require('fs');

        const writeStream = fs.createWriteStream('output.txt');

        writeStream.write('Data to be written');
        writeStream.end();

        writeStream.on('finish', () => {
        console.log('All data has been written to the file');
        });


 *  */

/**
 * NOTE;
 * In event-driven programming, you first register event handlers/callbacks for specific events.
 * Then, when those events occur, the associated callback functions are invoked
 * This asynchronous model allows your application to respond to various inputs,
         such as user actions, data availability, or network events, without blocking the execution of other tasks

 *Registering Event Handlers: You use methods like on() to register event handlers for specific events. For example:
  emitter.on('event', () => {
  // Event handler code
  });

 Event Occurs: At some point during the program's execution, the event you're listening for actually occurs.
             This could be a user action, data becoming available, or some other trigger.

 Event Registration => Event Triggering => Callback Execution
 */
