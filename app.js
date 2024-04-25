const add = require("./add");
console.log(add(2, 3));

console.log("hello");
/**
 * you can load a module with the help of require function
 * by requiring a module you are basically telling the v8 to execute that module
 * Here require() method will first load the module mentioned in its path and then run the code of current module
 * Note: All the function in require("./add") add module will be run from top to bottom
 * only after the code of the mentioned modules is finised executing then the code of the current module will run
 */
