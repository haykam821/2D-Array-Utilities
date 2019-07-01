const funcs = require("./funcs");
const is2DArray = require("is-2d-array");

/**
 * A class wrapper around the individual functions included in this library.
 * Methods that return a grid can be chained.
 */
class Grid {
	/**
	 * @param {Array[]} data The data to populate this grid with.
	 */
	constructor(data) {
		this.data = data;
	}

	/**
	 * Builds a grid given dimensions and a value.
	 * @param {number} rows The amount of rows (vertical, Y) to have.
	 * @param {number} columns The amount of columns (horizontal, X) to have.
	 * @param {*} defaultValue The value of each cell.
	 * @returns {Array[]} The built grid.
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
	Grid.prototype[name] = function(...arguments_) {
		const result = func(this.data, ...arguments_);
		return is2DArray(result) ? new Grid(result) : result;
	};
});

module.exports = Grid;
