const sum = (num1, num2) => num1 + num2;
const pi = Math.PI;
class SomeObj {
	constructor() {
		console.log("Object created....");
	}
}
module.exports = { sum: sum, pi: pi, SomeObj: SomeObj };
