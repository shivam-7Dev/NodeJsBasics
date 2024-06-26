const PizzaShop = require("./customEventEmitterModule.js");
const DrinkMachine = require("./DrinkListner.js");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

/**
 * Register an event listner using pizzaShop module
 */
pizzaShop.on("order-pizza", (size, topping) => {
  console.log(`baking a ${size} pizza with ${topping}`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order();
pizzaShop.displayOrderNumber();
