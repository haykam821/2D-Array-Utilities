module.exports = (fillLine, assert, grid) => {
	it("works with value", () => {
		fillLine(grid, 0, 0, 3, 4, "line");

		assert.strictEqual(grid[0][0], "line");
		assert.strictEqual(grid[1][1], "line");
		assert.strictEqual(grid[2][2], "line");
		assert.strictEqual(grid[3][2], "line");
		assert.strictEqual(grid[4][3], "line");
	});

	it("works with function", () => {
		fillLine(grid, 0, 0, 3, 4, (x, y) => `${x},${y}`);

		assert.strictEqual(grid[0][0], "0,0");
		assert.strictEqual(grid[1][1], "1,1");
		assert.strictEqual(grid[2][2], "2,2");
		assert.strictEqual(grid[3][2], "2,3");
		assert.strictEqual(grid[4][3], "3,4");
	});
};