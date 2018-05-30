// You must implement a randomNumber(n) function that generates a random number greater than or equal to 0, and less than input n.

// n must be greater than 0
// n must be less than 1,000,000
// Your only source of randomness must be the provided flip() function
// You cannot use Math.random in your implementation
// You can use Google to figure out how to do this
// randomNumber(500) // returns 123
// randomNumber(1) // returns 0
// randomNumber(500) // returns 466
// randomNumber(1000001) // throw error

const randomNumber = require('./randomNumber');

describe('randoNumber function', () => {
  it('trows error if number is less than 0', () => {
    expect(() => randomNumber(-2)).toThrow();
    expect(() => randomNumber(1000001)).toThrow();
  });

  it('return a random number', () => {
    expect(randomNumber(29)).toBeLessThan(30);
    expect(randomNumber(2)).toBeLessThan(2);
    expect(randomNumber(500)).toBeLessThan(500);
    expect(randomNumber(1)).toBe(0);
    expect(randomNumber(500)).toBeLessThan(500);
  })
});
