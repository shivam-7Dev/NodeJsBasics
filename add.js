console.log("start");
const add = (a, b) => {
  return a + b;
};

//default export
module.exports = add;
console.log("end");

/**
 * by default node js adhares to common js functionality
 * expoting some file=> module.exports
 * imporing some file=> requie()
 * The right way to reuse a  block of code is by exposing certain fuctionality that can be consunmed by external files and app
 * You can do that with sepecial modul.export object
 * The value of module.exports is what the require( ) method return for the corresponding module
 * module.exports = add is a default export where you can refer to the return value by any name
 */
