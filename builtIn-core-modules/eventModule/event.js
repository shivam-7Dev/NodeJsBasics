const EventEmitter = require("node:events");
//events module returns a class called EventEmitter which encapsulate functionality to emmit event and respond to it

const event = new EventEmitter();

//we want to respond to a custom event called order-pizza
//registering of the event using on() method  or addListener

// event.addListener("order-pizza", () =>
//   console.log("order received, backing the pizza")
// );
event.on("order-pizza", (size, topping) =>
  console.log(
    `order received, backing a ${size} pizza with ${topping} toppings`
  )
);
event.on("order-pizza", (size, topping) => {
  if (size == "large") {
    console.log("serving complemetary drink");
  }
});
//firing the event . Note you should first and event listner before firing an event
event.emit("order-pizza", "large", "mushroom");
console.log("end");
