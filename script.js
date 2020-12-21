function isPrime(n) {
  const s = Math.floor(Math.sqrt(n));

  for (let i = 2; i < s; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
