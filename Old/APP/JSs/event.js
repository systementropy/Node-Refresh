const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", (num1, num2) => {
	console.log(`Event has occured ${num1 + num2}`);
});

eventEmitter.emit("tutorial", 1, 2);

class Person extends EventEmitter {
	constructor(name) {
		super();
		this._name = name;
	}
	get name() {
		return this._name;
	}
}

let pedro = new Person("Pedro");
let maya = new Person("Maya");
pedro.on("name", () => {
	console.log(`My name is ${pedro.name}`);
});
maya.on("name", () => {
	console.log(`My name is ${maya.name}`);
});
pedro.emit("name");
maya.emit("name");
