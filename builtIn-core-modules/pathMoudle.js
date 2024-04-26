const path = require("node:path");
const { clearScreenDown } = require("node:readline");

console.log(__dirname); //C:\personal\NodeJsBasics\builtIn-core-modules
console.log(__filename); //C:\personal\NodeJsBasics\builtIn-core-modules\pathMoudle.js

//path.basename()
console.log(path.basename(__dirname)); //builtIn-core-modules
console.log(path.basename(__filename)); //pathMoudle.js
console.log("------------------------------");

//path.extname()
console.log(path.extname(__dirname)); // ''
console.log(path.extname(__filename)); //.js
console.log("------------------------------");

//path.extname()
console.log(path.parse(__dirname)); // ''
/**
 * {
  root: 'C:\\',
  dir: 'C:\\personal\\NodeJsBasics',
  base: 'builtIn-core-modules',
  ext: '',
  name: 'builtIn-core-modules'
 }
 */
console.log(path.parse(__filename)); //.js
/**
 * {
  root: 'C:\\',
  dir: 'C:\\personal\\NodeJsBasics\\builtIn-core-modules',
  base: 'pathMoudle.js',
  ext: '.js',
  name: 'pathMoudle'
}
 */

//path.format()
console.log(
  path.format({
    root: "C:\\",
    dir: "C:\\personal\\NodeJsBasics\\builtIn-core-modules",
    base: "pathMoudle.js",
    ext: ".js",
    name: "pathMoudle",
  })
); //C:\personal\NodeJsBasics\builtIn-core-modules\pathMoudle.js
console.log("------------------------------");

//path.isAbsolute()
console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute("./pathMoudle.js")); //false
console.log(path.isAbsolute("/pathMoudle.js")); //true
console.log("------------------------------");

//path.join()
console.log(path.join("folder1", "folder2", "folder3", "index.js")); //=> sfolder1\folder2\folder3\index.js
console.log(path.join("/folder1", "/folder2", "folder3", "index.js")); //=> \folder1\folder2\folder3\index.js
//normalisarion example
console.log(path.join("/folder1", "//folder2", "folder3", "index.js")); //=> \folder1\folder2\folder3\index.js (only one slash in the result)
console.log(path.join("/folder1", "//folder2", "folder3", "../index.js")); //=>\folder1\folder2\index.js (from folder3 jump one folder up and the add index.html or remove the previous folder)
console.log(path.join(__dirname + "data.json")); // absolute path of data.json =>C:\personal\NodeJsBasics\builtIn-core-modulesdata.json
console.log("------------------------------");
//path.resolve()
const absolutePath = path.resolve("/folder", "/file.txt");
console.log(absolutePath); //=> C:\file.txt. Even though both paths are absolute, path.resolve() returns the latter path because it's the last absolute path in the argument list.
console.log(path.resolve("folder1", "folder2", "folder3", "index.js")); //=> C:\personal\NodeJsBasics\builtIn-core-modules\folder1\folder2\folder3\index.js
console.log(path.resolve("/folder1", "/folder2", "folder3", "index.js")); //=> C:\folder2\folder3\index.js
console.log(path.resolve("/folder1", "//folder2", "folder3", "index.js")); //=> C:\folder2\folder3\index.js
console.log(path.resolve("/folder1", "//folder2", "folder3", "../index.js")); //=> C:\folder2\index.js (from folder3 jump one folder up and the add index.html or remove the previous folder)
console.log(path.resolve(__dirname + "data.json")); // absolute path of data.json =>C:\personal\NodeJsBasics\builtIn-core-modulesdata.json

/**
 * console.log(__dirname) => C:\personal\NodeJsBasics\builtIn-core-modules
 * console.log(__filename) => C:\personal\NodeJsBasics\builtIn-core-modules\pathMoudle.js
 *
 * path module provides utilites for working with file and directory paths
 * You have to first import the module using the required keyword
 *
 * path module has around 14 different properties and methods but 7 are regularly used
 *
 * 1. path.basename()
 * 2. path.extname()
 * 3.path.parse(): it returns an object whose property represents the significant protion of the path
     there are 5 properties in the object retured
    
 * 4.path.format(obj): it returns a parse string given an object
 * 5.path.isabsolute(string1+string2+): given a path this returns if the path is absolute or not
 * 
 * 
 * 
 * 
 * 6.path.join(): it join all path  segmets together using the platform specific setpertor as a delimiter and then normalises the returning path
 *                  /forward slash for mac and back slash for windows
 * 
 * 7.path.resolve(): this resolve a sequence of path or path segment into absolute path
 * path.resolve([...paths]) [...paths]: A sequence of path segments or paths to be resolved. These can be strings or buffer objects.
 * 
 * 
 *
 */
