const http = require("http");
const server = http.createServer((req, resp) => {
	if (req.url === "/") {
		resp.write("Hello world from NodeJS");
		resp.end();
	} else {
		resp.write(`Hello world from ${req.url} NodeJS`);
		resp.end();
	}
});
server.listen(3000);
