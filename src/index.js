const funcs = require("./funcs/index.js");

class TwoDimArray {
	constructor(rows, columns, defaultValue) {
		this.data = Array(rows).fill(Array(columns).fill(defaultValue));
	}
}

Object.entries(funcs).forEach(([ name, func ]) => {
	TwoDimArray.prototype[name] = function(...args) {
		return func(this.data, ...args);
	};
});

module.exports = 2DArray;
