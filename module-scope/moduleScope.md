# Module scope

> In Node.js, module scope refers to the scope of variables, functions, and other declarations within a module file.
> Each module in Node.js has its own scope, meaning that variables and functions declared within a module are not accessible from outside unless explicitly exported.

### Here's a breakdown of how module scope works in Node.js:

1. **Encapsulation**: When you create a module in Node.js, all the variables and functions declared within that module are encapsulated within its own scope. This helps prevent naming conflicts and keeps code organized and modular.
2. **File-level Scope**: Unlike in browser-based JavaScript, where variables declared with var have function-level scope, variables declared with var, let, or const at the top level of a Node.js module have file-level scope. This means they are accessible throughout the entire module but are not accessible outside the module unless explicitly exported.
3. **Exporting and Importing**: To make variables, functions, or objects available outside the module, you need to explicitly export them using module.exports or exports object. Similarly, to use variables, functions, or objects from another module, you need to import them using require() or ES6 import syntax.
4. **Global Scope**: In Node.js, variables declared without the var, let, or const keywords are automatically attached to the global object (global), making them accessible from anywhere within the application. However, it's generally considered bad practice to pollute the global namespace in this way because it can lead to naming conflicts and make code harder to maintain.

## Node js achieves module scope with the help of iife

> When Node.js loads a module, it wraps the code within a function before executing it.
> This function is called the Module Wrapper Function.
> It provides a local scope for the module's code, preventing variables and functions from polluting the global scope
> IIFE allows you to repeat variable or function names without any conflicts
> The IIFE that wraps every module contains 5 parameters which are pretty important for the functioning of a module

```js
console.log("start");
const add = (a, b) => {
  return a + b;
};

//default export
module.exports = add;
console.log("end");
```

```js
(function (exports, require, module, __filename, __dirname) {
  //Module code goes here
  /**
   * The IIFE that wraps every module contains 5 parameters which are pretty important for the functioning of a module
   * 
   * Those global looking variable are specific to the module and they are available for use in every module
   * 
   * __dirname: it a convienence varible which gives absolute patch of current directory. It's a string
   * __filename: it'a also a convieniance variable which gives absolute path to current file/Module.It's a string
   * require: it ia used to load a module by a path
   * module: it'a a reference to the current module. its an object wuth many poperties like
   * filename, children,exports, loaded parent, path, paths,

   */
});
```

```js
(function (exports, require, module, __filename, __dirname) {
  // Module code goes here
  console.log("start");
  const add = (a, b) => {
    return a + b;
  };

  //default export
  module.exports = add;
  console.log("end");
});
```

```js
/*
 *many iife in same modue
 */
(function () {
  console.log("iife one");
})();
(function () {
  const superHero = "batman";
  console.log(superHero);
})();
(function () {
  const superHero = "batman";
  console.log(superHero);
})();
```
