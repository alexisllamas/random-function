const flip = require('./flip');

function randomNumber(n) {
  /*
    Your implementation, using the flip() function
  */

  // Returns a number between [0, n)
  if (n < 0 || n > 1000000) {
    throw new Error('n must be greater than 0 and less than 1,000,000');
  }

  return Array.from({length: n - 1}).reduce(sum => flip() ? sum + 1 : sum, 0)
}

module.exports = randomNumber
