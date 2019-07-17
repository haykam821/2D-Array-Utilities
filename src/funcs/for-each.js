/**
 * Iterates over every cell in a grid.
 * @param {(Grid|Array[])} grid The grid to iterate.
 * @param {Function} callback A function to execute on each cell, which is passed the cell value, X position, Y position, and grid respectively.
 */
function forEach(grid, callback) {
	grid.forEach((row, y) => {
		row.forEach((cell, x) => {
			callback(cell, x, y, grid);
		});
	});
}
module.exports = forEach;