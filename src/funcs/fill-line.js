const bresenham = require("bresenham");
const set = require("./set.js");

/**
 * Fills all values on the approximation of a line given two endpoints and a value.
 * @param {(TwoDimArray|Array[])} tda The 2D array to fill a line in.
 * @param {number} startX The X position of the start of the line.
 * @param {number} startY The Y position of the start of the line.
 * @param {number} endX The X position of the end of the line.
 * @param {number} endY The Y position of the end of the line.
 * @param {(*|function)} value The value or a function called with the coordinates of a cell to be filled that returns a value.
 * @returns {(TwoDimArray|Array[])} The 2D array, with the line filled.
 */
function fillLine(tda, startX, startY, endX, endY, value) {
	bresenham(startX, startY, endX, endY, (x, y) => {
		set(tda, x, y, typeof value === "function" ? value(x, y) : value);
	});
	return tda;
}
module.exports = fillLine;
