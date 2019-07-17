const chai = require("chai");
const assert = chai.assert;

const path = require("path");
const funcTests = require("require-all")(path.resolve(__dirname, "./funcs"));

describe("funcs", () => {
	Object.entries(funcTests).forEach(([key, test]) => {
		describe(key, () => {
			test(require("./../src/funcs/" + key + ".js"), assert, [
				[1, 2, 3, 4, 5],
				[6, 7, 8, 9, 10],
				[11, 12, 13, 14, 15],
				[16, 17, 18, 19, 20],
				[21, 22, 23, 24, 25],
			]);
		});
	});
});