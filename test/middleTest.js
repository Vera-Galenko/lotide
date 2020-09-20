const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [2, 5] for [1, 2, 5, 7]", () => {
    assert.deepEqual(middle([1, 2, 5, 7]), [2, 5]);
  });
  
  it("returns [ 7, 8 ] for [1, 2, 5, 7, 8, 9, 8, 9]", () => {
    assert.deepEqual(middle([1, 2, 5, 7, 8, 9, 8, 9]), [ 7, 8 ]);
  });

  it("returns [ ] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });


});