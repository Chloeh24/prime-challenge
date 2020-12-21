const test = require("tape");

test("initialise", (t) => {
  let x = 5;
  t.equal(x, 5, "Should return 5");
  t.end();
});
