const test = require("tape");

const { isPrime, generatePrimeArray, createData } = require("./script.js");

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

test("Generates no numbers if number is negative", (t) => {
  t.deepEqual(generatePrimeArray(-3), [], "Should return []");
  t.end();
});

test("Generates 2 if input is 1", (t) => {
  t.deepEqual(generatePrimeArray(1), [2], "Should return [2]");
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

test("No data if array is empty", (t) => {
  t.deepEqual(createData([]), [], "Should return empty array");
  t.end();
});

test("If 3 numbers given, should return 4 rows of entries", (t) => {
  t.equal(createData([2, 3, 4]).length, 4, "Should return 4 ");
  t.end();
});

test("Should return correct calculations of first 2 prime numbers", (t) => {
  t.deepEqual(createData([2, 3]), [
    ["-", 2, 3],
    [2, 4, 6],
    [3, 6, 9],
  ]);
  t.end();
});
