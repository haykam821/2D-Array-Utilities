/**
 * Gets a cell in a 2D array by its coordinates.
 * @param {(TwoDimArray|Array[])} tda The 2D array to get a cell's value from.
 * @param {number} column The column (X) of the cell to get the value of.
 * @param {number} row The row (Y) of the cell to get the value of.
 * @returns {*} The value of the cell.
 */
function get(tda, column, row) {
	return tda[row][column];
}
module.exports = get;