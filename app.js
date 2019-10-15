const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, resp) => {
	resp.send("hello world");
});
app.get("/example", (req, resp) => {
	resp.send("hitting example");
});
app.get("/example/:name/:age", (req, resp) => {
	console.log(req.params);
	resp.send(`hitting ${req.params.name} @ ${req.params.age}`);
});

app.get("/home", (req, resp) => {
	console.log(req.query);
	resp.send(`hitting ${req.query.name} @ ${req.query.age}`);
});

app.listen(3000);
