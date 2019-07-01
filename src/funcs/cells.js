/**
 * Gets the number of cells in a grid.
 * @param {(Grid|Array[])} grid The grid to get the amount of cells of.
 * @returns {number} The amount of cells in the grid.
 */
function cells(grid) {
	return grid.reduce(((cellCount, row) => {
		return cellCount + row.length;
	}), 0);
}
module.exports = cells;