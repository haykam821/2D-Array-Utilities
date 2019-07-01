const bresenham = require("bresenham");
const set = require("./set.js");

/**
 * Fills all values on the approximation of a line given two endpoints and a value.
 * @param {(Grid|Array[])} grid The grif to fill a line in.
 * @param {number} startX The X position of the start of the line.
 * @param {number} startY The Y position of the start of the line.
 * @param {number} endX The X position of the end of the line.
 * @param {number} endY The Y position of the end of the line.
 * @param {(*|function)} value The value or a function called with the coordinates of a cell to be filled that returns a value.
 * @returns {(Grid|Array[])} The grid, with the line filled.
 */
function fillLine(grid, startX, startY, endX, endY, value) {
	bresenham(startX, startY, endX, endY, (x, y) => {
		set(grid, x, y, typeof value === "function" ? value(x, y) : value);
	});
	return grid;
}
module.exports = fillLine;
