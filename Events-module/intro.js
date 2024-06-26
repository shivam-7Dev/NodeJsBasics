const EventEmitter = require("node:events");

/**
 * The events module returns us a class named EventEmitter that encapsulates functionality to emit events and respond to events.
 * The events module allows us to work with events in Node.js.
 * An event is an action or occurrence that has happened in our application that we can respond to.
 * Using the events module, we can dispatch our own custom events and respond to those custom events in a non-blocking manner.
 * Eg: ordering a pizza is an Event and BAKING a pizza is a response to that event.
 * So dispatching and responding to custom events curtosy of events module
 */

const emitter = new EventEmitter();

/**
 * Register a listener for an event.
 * Note: One event can have more than one event listener or handler.
 * Note: You have to register the event handler before dispatching the event.
 * If you fire/emit an event/action and there is no event handler attached to it, then nothing will happen.
 * A listner a callback fuction that gets executed when the corresponding event is emitted
 * A callback fuction allows us to delay an execution till an action has occurred
 */
emitter.on("order-pizza", (size, topping) => {
  console.log("Event handler for order pizza.");
  console.log(`baking a ${size} pizza with ${topping}`);
});

emitter.addListener("order-pizza", (size, topping) => {
  console.log("Second event listener for the order-pizza event.");
  console.log(`baking a ${size} pizza with ${topping}`);
  if (size == "large") console.log("serving complemetry drink-----");
});

/**
 * Broadcast an event using the .emit() method.
 */
emitter.emit("order-pizza", "large", "mushroom");
