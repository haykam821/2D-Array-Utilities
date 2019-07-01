/**
 * Gets a cell in a grid by its coordinates.
 * @param {(Grid|Array[])} grid The grid to get a cell's value from.
 * @param {number} column The column (X) of the cell to get the value of.
 * @param {number} row The row (Y) of the cell to get the value of.
 * @returns {*} The value of the cell.
 */
function get(grid, column, row) {
	return Grid[row][column];
}
module.exports = get;