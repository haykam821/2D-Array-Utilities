const funcs = require("./funcs");
const is2DArray = require("is-2d-array");

class TwoDimArray {
	constructor(data) {
		this.data = data;
	}

	static build(rows, columns, defaultValue) {
		return new Array(rows).fill().map(() => {
			return new Array(columns).fill().map(() => {
				return defaultValue;
			});
		});
	}
}

Object.entries(funcs).forEach(([ name, func ]) => {
	TwoDimArray.prototype[name] = function(...arguments_) {
		const result = func(this.data, ...arguments_);
		return is2DArray(result) ? new TwoDimArray(result) : result;
	};
});

module.exports = TwoDimArray;