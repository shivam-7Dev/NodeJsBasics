const EventEmitter = require("node:events");
/**
 * Here we will build a module that will build on top of event module
 */

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }
  /**
   * Add two methods in this class
   * one: to place order, where we will increment the order number
   * two: dispaly order number , which will display the current order number
   */

  order() {
    /**
     * In this order method you can emmit an event
     * Here we dont have seperate emitter object
     * this keyword referes to the emitter objext
     */

    this.emit("order-pizza", "large", "mushroom");
    this.orderNumber++;
  }

  displayOrderNumber() {
    console.log(this.orderNumber);
  }
}

module.exports = PizzaShop;
