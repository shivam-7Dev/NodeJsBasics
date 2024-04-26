const PizzaShop = require("./pizzaShopModule");
const DrinkMachine = require("./drink-machine");
const drink = new DrinkMachine();

const pizzaShop = new PizzaShop();

//handling order using the event driven achitecture
pizzaShop.on("order-pizza", (size, topping) => {
  console.log(`order received, baking a ${size} with ${topping}`);
  drink.serveDrink(size);
});

pizzaShop.order("large", "mushroom");
pizzaShop.displayOrderNumber();
