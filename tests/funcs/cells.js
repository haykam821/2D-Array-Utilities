module.exports = (cells, assert, grid) => {
	it("works", () => {
		assert.strictEqual(cells(grid), 25);
	});
};