const a = require('../src');

describe("NYC", () => {
  it("step 1", () => {
    expect(a(true, false)).toEqual([1, 2]);
  });

  it("step 2", () => {
    expect(a(false, true)).toEqual([2, 1]);
  });
});
