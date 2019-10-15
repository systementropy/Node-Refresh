const fs = require("fs");
const zlib = require("zlib");
const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("./example2.txt", "utf8");
readStream.pipe(writeStream);
