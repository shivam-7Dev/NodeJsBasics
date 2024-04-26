/**
 * STREAMS
 * Streams are abstractions that represent a continuous flow of data.
 * streams are used to handle reading from or writing to a data source sequentially, piece by piece, rather than loading the entire data into memory at once.
 * They provide a way to handle data in chunks rather than loading everything into memory at once.
 * 
 * Types of Streams in Node.js:
 
    Readable Streams: Streams from which data can be read. 
                    Examples include reading data from files (fs.createReadStream()), HTTP request bodies, or data piped from other streams.
    Writable Streams: Streams to which data can be written. 
                    Examples include writing data to files (fs.createWriteStream()), HTTP response bodies, or data piped to other streams.
    Duplex Streams: Streams that are both readable and writable. 
                    Examples include network sockets and process.stdin/process.stdout.
    Transform Streams: Special type of duplex stream where the output is computed based on the input.
                        They allow you to modify or transform data as it's being read or written.
                        Examples include zlib.createGzip() for compressing data and crypto.createCipher() for encrypting data.

*/

/**
 * BUFFER
 * 
 * Node.js cannot control the pace at which data arrives in the stream
 * It can only decide when is the wite time to seng the data for processing
 * If there is data already being processed or too little data to process, Node puts the arriving data in a buffer
 * 
 * Buffers are a fixed-size chunk of raw memory allocated to temporarily hold data.
 * They are often used in conjunction with streams to efficiently manage data flow.
 * Buffers store data as sequences of bytes, which is ideal for handling binary data like images, audio, or compressed files.
 * Buffers are not suitable for storing large amounts of data permanently. They are meant for temporary storage during data processing.
 *Buffers are created using the Buffer class in Node.js. You can allocate a buffer of a specific size and then manipulate or read data from it.
 * Buffers are instances of the Buffer class in Node.js and provide a way to work with binary data directly. 
 *Buffers are especially useful when dealing with I/O operations, such as reading from or writing to files, network communication, or when working with binary protocols.
 
 * Creating Buffer

    Creating from String: Buffer.from(string[, encoding])
    Creating Empty Buffer: Buffer.alloc(size)
    Creating from Array: Buffer.from(array)
    Creating from Another Buffer: Buffer.from(buffer)
    Creating from ArrayBuffer: Buffer.from(arrayBuffer[, byteOffset [, length]])

*/

/**
 * How Buffers and Streams Work Together:
 *
 *Streams operate in chunks. When data is received or needs to be written, it's placed in a buffer for temporary storage.
 *The buffer size is configurable and can be adjusted based on your application's needs and available memory.
 *As the stream processes the data, it reads from the buffer and then refills it with new data chunks as needed

*/

// A BUFFER CONTAINS RAW BINARY DATA
const buffer = Buffer.from("Hello, world!", "utf8");
console.log(buffer.toJSON());
/**
  {
  type: 'Buffer',
  data: [
     72, 101, 108, 108, 111,
     44,  32, 119, 111, 114,
    108, 100,  33
  ]
 }

*/
//node prints base 16 of hexadecimal value of those binary number so that our terminla do not gets flooded
console.log(buffer); //<Buffer 48 65 6c 6c 6f 2c 20 77 6f 72 6c 64 21>
console.log(buffer.toString("utf8"));
buffer.write("Node.js", 7, 6, "utf8");
console.log(buffer.toString("utf8"));
