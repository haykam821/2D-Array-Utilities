/**
 * Sets the value of a cell in a grid.
 * @param {(Grid|Array[])} grid The grid to set a cell in.
 * @param {number} column The column (X) of the cell to set the value of.
 * @param {number} row The row (Y) of the cell to set the value of.
 * @param {*} value The new value of the cell.
 * @returns {(Grid|Array[])} The updated grid.
 */
function set(grid, column, row, value) {
	grid[row][column] = value;
	return grid;
}
module.exports = set;