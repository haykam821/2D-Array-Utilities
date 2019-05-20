const funcs = require("./funcs");

class TwoDimArray {
	constructor(rows, columns, defaultValue) {
		this.data = new Array(rows).fill(new Array(columns).fill(defaultValue));
	}
}

Object.entries(funcs).forEach(([ name, func ]) => {
	TwoDimArray.prototype[name] = function(...arguments_) {
		return func(this.data, ...arguments_);
	};
});

module.exports = TwoDimArray;