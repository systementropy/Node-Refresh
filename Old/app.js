const http = require("http");
const fs = require("fs");

http
	.createServer((req, resp) => {
		const readStream = fs.createReadStream("./APP/static/index.html");
		resp.writeHead(200, { "Content-type": "text/html" });
		readStream.pipe(resp);
		// const readStream = fs.createReadStream("./APP/static/career-cat.json");
		// resp.writeHead(200, { "Content-type": "application/json" });
		// readStream.pipe(resp);
		// const readStream = fs.createReadStream("./APP/static/meh.png");
		// resp.writeHead(200, { "Content-type": "image/png" });
		// readStream.pipe(resp);
	})
	.listen(3000);
