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

/**
 * many iife in same module
 *here is no name collision because each Immediately Invoked Function Expression (IIFE) creates its own scope.
 *Each IIFE creates its own lexical scope. 
 *Variables declared within the scope of an IIFE are not accessible from outside the function unless explicitly exposed.
 * variables declared using const and let have block-level scope. In your example, superHero is declared using const within each IIFE
 * Therefore, each superHero variable is scoped to its respective IIFE and is not accessible outside that scope.
 * Each IIFE is a separate function invocation.When you define superHero inside one IIFE, 
    it does not affect the superHero variable defined in other IIFEs because each IIFE maintains its own isolated scope.

 */
