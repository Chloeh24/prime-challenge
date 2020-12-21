const generateBtn = document.getElementById("generate");
const primeArray = [];

const isPrime = (n) => {
  const s = Math.floor(Math.sqrt(n));

  if (n === 2) {
    return true;
  } else if (n <= 1 || n % 2 === 0) {
    return false;
  } else {
    for (let i = 3; i <= s; i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
};

const generatePrimeArray = (n) => {
  for (let i = 2; n > 0; i++) {
    if (isPrime(i)) {
      primeArray.push(i);
      n -= 1;
    }
  }
  return primeArray;
};

const createTable = (n) => {
  for (let i = 0; i < primeArray.length; i++) {}
};

module.exports = { isPrime, generatePrimeArray };
