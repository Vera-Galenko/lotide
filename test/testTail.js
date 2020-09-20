

const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [Lighthouse, Labs] for [Yo Yo, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });
  
  it("returns [Yo Yo, Lighthouse, Labs] for [Course, Yo Yo, Lighthouse, Labs]", () => {
    assert.strictEqual(tail(["Course", "Yo Yo", "Lighthouse", "Labs"]).length, 3);
  });


});
