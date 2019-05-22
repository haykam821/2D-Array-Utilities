/**
 * Sets the value of a cell in a 2D array.
 * @param {(TwoDimArray|Array[])} tda The 2D array to set a cell in.
 * @param {number} column The column (X) of the cell to set the value of.
 * @param {number} row The row (Y) of the cell to set the value of.
 * @param {*} value The new value of the cell.
 * @returns {(TwoDimArray|Array[])} The updated 2D array.
 */
function set(tda, column, row, value) {
	tda[row][column] = value;
	return tda;
}
module.exports = set;