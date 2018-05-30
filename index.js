const randomNumber = require('./randomNumber');

console.log(randomNumber(500));
console.log(randomNumber(1));
console.log(randomNumber(500));

try {
  randomNumber(1000001); // throw error
} catch(e) {
  console.log(e.message);
}
