const fs = require("fs");

fs.writeFile("example.txt", "this is an example", err => {
	if (err) console.log(err);
	else {
		console.log("File created....");
		fs.readFile("example.txt", "utf8", (err, file) => {
			if (err) {
				console.log("Error reading");
			} else {
				console.log(`File is \n ${file}`);
			}
		});
	}
});

// fs.rename("example.txt", "expample2.txt", err => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("File renamed successfully");
// 	}
// });

// fs.appendFile("example.txt", `\nSome data being appended`, err => {
// 	if (err) console.log(err);
// 	else console.log("Successfully appended");
// });

fs.unlink("example.txt", err => {
	if (err) console.log(err);
	else console.log("Successfully deleted");
});

fs.mkdir("tutorial", err => {
	if (err) console.log(err);
	else {
		console.log("Successfully created");
		fs.writeFile("./tutorial/example.txt", "123", err => {
			if (err) console.log(err);
			else console.log("Successfully created file");
		});
	}
});

fs.readdir("tutorial", (err, files) => {
	if (err) console.log(err);
	else {
		console.log(files);
		for (let file of files) {
			console.log(file);

			fs.unlink(`./tutorial/${file}`, err => {
				if (err) console.log(err);
				else console.log("Successfully deleted files");
			});
		}
		fs.rmdir("./tutorial", err => {
			if (err) console.log(err);
			else console.log("Successfully deleted folder");
		});
	}
});
