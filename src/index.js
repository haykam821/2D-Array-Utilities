const funcs = require("./funcs");
const is2DArray = require("is-2d-array");

/**
 * A class wrapper around the individual functions included in this library.
 * Methods that return a 2D array can be chained.
 */
class TwoDimArray {
	/**
	 * @param {Array[]} data The data to populate this 2D array with.
	 */
	constructor(data) {
		this.data = data;
	}

	/**
	 * Builds a 2D array given dimensions and a value.
	 * @param {number} rows The amount of rows (vertical, Y) to have.
	 * @param {number} columns The amount of columns (horizontal, X) to have.
	 * @param {*} defaultValue The value of each cell.
	 * @returns {Array[]} The built 2D array.
	 */
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
