//creating our own module that bilds on top of event emitter class

const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber += 1;
    this.emit("order-pizza", size, topping);
  }

  displayOrderNumber() {
    console.log(this.orderNumber);
  }
}

//exporting this class so that it can be used in other modules
module.exports = PizzaShop;
