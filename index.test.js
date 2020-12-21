const test = require("tape");

const { isPrime, generatePrimeArray } = require("./script.js");

test("initialise tests", (t) => {
  let x = 5;
  t.equal(x, 5, "Should return 5");
  t.end();
});

test("Checks if 4 is a prime number", (t) => {
  t.equal(isPrime(4), false, "Should return false");
  t.end();
});

test("Checks if 2 is a prime number", (t) => {
  t.equal(isPrime(2), true, "Should return true");
  t.end();
});

test("Checks if 89 is a prime number", (t) => {
  t.equal(isPrime(89), true, "Should return true");
  t.end();
});

test("Checks if 55 is a prime number", (t) => {
  t.equal(isPrime(55), false, "Should return false");
  t.end();
});

test("Checks if 9 is a prime number", (t) => {
  t.equal(isPrime(9), false, "Should return false");
  t.end();
});

test("Generates a list of first 3 prime numbers", (t) => {
  t.deepEqual(generatePrimeArray(3), [2, 3, 5], "Should return [2, 3, 5]");
  t.end();
});

test("Generates a list of first 6 prime numbers", (t) => {
  t.deepEqual(
    generatePrimeArray(6),
    [2, 3, 5, 7, 11, 13],
    "Should return [2, 3, 5, 7, 11, 13]"
  );
  t.end();
});
