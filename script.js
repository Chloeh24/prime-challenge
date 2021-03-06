// check if number is prime
const isPrime = (n) => {
  // only iterate up to square root to decrease runtime complexity
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

// create an array of the first n prime numbers
const generatePrimeArray = (n) => {
  const primeArray = [];
  for (let i = 2; n > 0; i++) {
    if (isPrime(i)) {
      primeArray.push(i);
      n -= 1;
    }
  }
  return primeArray;
};

const createData = (array) => {
  // create data entries
  const data = [];
  if (array.length < 1) return data;

  data.push(["-"]);
  for (let i = 0; i < array.length; i++) {
    data[0].push(array[i]);
  }
  for (let i = 0; i < array.length; i++) {
    data.push([array[i]]);
  }

  // calculate products of primes
  for (let i = 1; i < data.length; i++) {
    for (let j = 1; j < data[0].length; j++) {
      data[i].push(data[0][j] * data[i][0]);
    }
  }
  return data;
};

// display prime multiplication table
const displayTable = (data) => {
  var result = "<table border=1 width='500' cellspacing='0'cellpadding='5'>";

  // iterate and create new row
  for (var i = 0; i < data.length; i++) {
    result += "<tr>";
    // iterate and insert entry into row
    for (var j = 0; j < data[i].length; j++) {
      result += "<td>" + data[i][j] + "</td>";
    }
    // close row
    result += "</tr>";
  }
  result += "</table>";

  return result;
};

module.exports = { isPrime, generatePrimeArray, createData, displayTable };
