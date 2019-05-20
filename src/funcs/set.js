module.exports = (tda, column, row, value) => {
	tda[row][column] = value;
	return tda;
};