/**
 * Javascript is synchronous, blocking, single-treaded languge
 * synchronous : code executes left to right and top to bottm
 * Blocking: because of its synchronous nature, no matter how long a previous process takes,
         the subsequent processes wont kick off until the former is completed
 *single threaded: A thread is a process that simply a process that your Javascript program can use to run task
        Each task can only do one task at a time
        JavaScript has just the one thread called the main thread for executing code
*/

function a() {
  console.log("a");
}
function b() {
  console.log("b");
}
a();
b();

/**
 * non-blocking asynchronous behaviour which is made possible by a browser for FE and Node.js for Backend
 * web browser and Node runtime define functions and APIs that allows us to register functions that should not be executed synchronously,
        and should be invoke asynchronoulsy, when some kind of event occurs eg.
        extiration of timer,
        reading of data,
        arrival of data over network
        click of button etc...
 */
