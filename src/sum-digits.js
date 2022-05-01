const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {

  let result = 0;
  name(num)
  function name(res) {
    let temp = res.toString().split('')
    res = 0
    temp.forEach(elem => {
      res += (+elem)
    })
    if (res >= 10) {
      name(res)
    }
    if (res < 10) {

      result = res
    }
  }
  return result
}

module.exports = {
  getSumOfDigits
};
console.log('11', getSumOfDigits(100))