/**
 * Gets the number of cells in a 2D array.
 * @param {(TwoDimArray|Array[])} tda The 2D array to get the amount of cells of.
 * @returns {number} The amount of cells in the 2D array.
 */
function cells(tda) {
	return tda.reduce(((cellCount, row) => {
		return cellCount + row.length;
	}), 0);
}
module.exports = cells;