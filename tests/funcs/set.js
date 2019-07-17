module.exports = (set, assert, testGrid) => {
	it("works", () => {
		set(testGrid, 4, 4, "SET");
		assert.strictEqual(testGrid[4][4], "SET");
	});
};