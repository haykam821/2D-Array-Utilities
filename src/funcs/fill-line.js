const bresenham = require("bresenham");
const set = require("./set.js");

module.exports = (tda, startX, startY, endX, endY, value) => {
	bresenham(startX, startY, endX, endY, (x, y) => {
		set(tda, x, y, typeof value === "function" ? value(x, y) : value);
	});
	return tda;
};