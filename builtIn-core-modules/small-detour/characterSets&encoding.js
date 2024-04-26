/**
 * Charcter sets
 *
 * To understand you fist need to understand binary data
 *
 * Binary data: computers store and represent data in binary format which is a collection of 0s and 1s
 * Each 0 or 1 is called a binary digit or bit for short
 * To work with a piece of data, a computer needs to convert that data into its binary representation
 * for eg to store number 4 computer needs to convert it into its binary form i.e 100
 *
 * But numbers are not the only data type we work with, strings are something that we come across quite ofter
 * so how will a computer  represent a character into binary format?
 * For example let letter V, how does the computer convert the character v into binary?
 * As it truns out the computer will first conver the character into number and the  number into binary representaion
 * computer will first convert v to a number that represents the v
 * 'V'.charCodeAt() => 86. so 86 is the numeric representaion of the character V
 * 'v'.charCodeAt() =>118
 * 
 * But how does a computer know what number will represent each character?
 * ANS: character sets
 * 
 * 
 * CHARACTER SETS
 * 
 * Character sets are the predefined list of characters represented by number
 * . Each character in a character set is represented by a numeric value, known as a code point.
 * THe most popluar charactersets are Unicode and ASCII
 * 
 * ASCII: It uses 7 bits to represent 128 characters, including uppercase and lowercase English letters, digits, punctuation marks, and control characters.
 * Unicode:Unicode is a standard designed to support characters from all writing systems in the world
            It assigns unique code points to each character, allowing computers to represent and manipulate text in any language

    UTF-8, UTF-16, UTF-32:
    UTF-8: Variable-width encoding, uses 1 to 4 bytes to represent characters. 
            It's backward compatible with ASCII because ASCII characters are represented using a single byte.
    UTF-16: Fixed-width encoding, uses 2 or 4 bytes to represent characters. It's commonly used in web browsers and XML files.
    UTF-32: Fixed-width encoding, uses 4 bytes to represent each character. 
    It's less popular due to its larger size but offers simple indexing.  
    
 ****  One byte is equal to 8 bits

 * Unicode character set dictates that 86 should represent character V


 * Encoding

 * Character Encoding dictates how to represent a number in a charcterset as binary data before it can be stored in a computer
 * Encoding is the process of converting text from one character set or encoding scheme to another.
 * It also dictates how many bits to use to represent the number
 * In Node.js, text data is typically stored as binary data (a sequence of bytes).
 * When reading or writing text data from/to files, network sockets, or other sources, 
        you need to specify the encoding to correctly interpret the binary data as text.

 * Common Encodings in Node.js:
    utf8: UTF-8 encoding.
    utf16le: UTF-16 Little Endian encoding.
    ucs2: Alias for UTF-16 encoding.
    ascii: ASCII encoding.
    latin1: ISO-8859-1 encoding.
    base64: Base64 encoding.
    hex: Hexadecimal encoding

 **** Encoding Conversion:
 *You can convert text between different encodings using Buffer methods.

    const utf8String = 'Hello, world!';
    const utf16String = Buffer.from(utf8String, 'utf8').toString('utf16le');
    console.log('UTF-16 String:', utf16String);

 */

//When reading text from a file, you specify the encoding to be used. For example:
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File contents:", data);
});

//When writing text to a file, you also specify the encoding.

const text = "Hello, world!";
fs.writeFile("file.txt", text, "utf8", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("File written successfully.");
});
