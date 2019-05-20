const funcs = require("./funcs");

class TwoDimArray {
	constructor(data) {
		this.data = data;
	}

	static build(rows, columns, defaultValue) {
		return new Array(rows).fill(new Array(columns).fill(defaultValue));
	}
}

Object.entries(funcs).forEach(([ name, func ]) => {
	TwoDimArray.prototype[name] = function(...arguments_) {
		return func(this.data, ...arguments_);
	};
});

module.exports = TwoDimArray;