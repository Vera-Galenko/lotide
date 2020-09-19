// const assertEqual = require('../assertEqual');
// assertEqual(1, 1);
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("cat", "cat");
// assertEqual(4, 6);


const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});