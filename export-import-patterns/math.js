const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};
module.exports.multi = (a, b) => {
  return a * b;
};
/**
 *first pattern=> exporting a single file
 *this is called default export and this can be imported by any name
 */
// module.exports = add;

/**
 * second pattern : directly assigning value to the module.exports
 * module.exports== (a, b) => {
       return a + b;
    }
*/

/**
 * patter three: exporting more than one variable
 * here we assign an object to the module.export
 */

module.exports = {
  ...module.exports,
  add,
  sub,
};
