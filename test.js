/* eslint-env mocha */

const chai = require("chai");
const assert = chai.assert;

const funcs = require("./src/funcs");

const testTwoDimArray = [
	[ 1, 2, 3, 4, 5 ],
	[ 6, 7, 8, 9, 10 ],
	[ 11, 12, 13, 14, 15 ],
	[ 16, 17, 18, 19, 20 ],
	[ 21, 22, 23, 24, 25 ],
];

const funcTests = {
	get: {
		assertToEqual: 14,
		params: [3, 2],
	},
};

/**
 * Tests a given 2D array function.
 * @param {string} name The name of the function.
 * @param {function} func The function.
 */
function testFunction([ name, func ]) {
	if (!funcTests[name]) return;

	it(name, function() {
		const test = funcTests[name];
		assert.equal(func(testTwoDimArray, ...test.params), test.assertToEqual);
	});
}

describe("2D array functions", function() {
	Object.entries(funcs).forEach(testFunction);
});
