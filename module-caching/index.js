const superHero = require("./super-hero");
/**
 * when you load a module with the help of the require() method the result is cached for any other require call of same module
 * so if you call require("./super-hero")  again for the same path. node will check its cache and return the last loaded value
 * second call to require("./super-hero") will not re run the super-hero.js code again for optimization
 * if you modify the fisr retured value then that modified value will be retured on subsequent require call
 * the value is stored in require.cache property
 * If you need a new instance of cetain class or constructor then export the whole class or constuctor insted of the instance of that class
 */

console.log(superHero.getName());
superHero.setName("superman");
console.log("--------------------");
console.log("--------------------");
console.log(superHero.getName());

const newsuperHero = require("./super-hero");

console.log(newsuperHero.getName());
