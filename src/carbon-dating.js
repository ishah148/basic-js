const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */


function dateSample(...args) {
  if (args.length == 0)
    return false
  if (typeof args[0] !== 'string')
    return false
  if (args[0] === '' || args[0] === ' ' || typeof Number(args[0]) !== 'number' || isNaN(args[0]))
    return false
  if(args[0] <= 0 || args[0] > 15 || args[0] === 15.1)
    return false

  let k = 0.693 / HALF_LIFE_PERIOD
  let res = Math.log(MODERN_ACTIVITY / args[0]) / k;
  return (Math.ceil(res, 1) === Infinity) ? false : Math.ceil(res, 1);
}

module.exports = {
  dateSample
};


console.log(dateSample('3'))
console.log(dateSample('ACTIVITY OVER 9000'))
console.log(dateSample(' '))


console.log(dateSample(' \n\t\r'))
console.log(dateSample(' '))
console.log(dateSample(''))