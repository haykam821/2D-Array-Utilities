module.exports = (func, assert, testGrid) => {
	it("works", () => {
		assert.strictEqual(func(testGrid, 3, 2), 14);
	});
};