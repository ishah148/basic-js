const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  let obj1 = {}
  let obj2 = {}
  s1.split('').forEach(i => {
    obj1[`${i}`] = obj1[`${i}`] || 0
    obj1[`${i}`] += 1
  })
  s2.split('').forEach(i => {
    obj2[`${i}`] = obj2[`${i}`] || 0
    obj2[`${i}`] += 1
  })
  for (i in obj2) {
    if (obj1[i] >= obj2[i]) {
      res += obj2[i]
    }
    if (obj2[i] > obj1[i]) {
      res += obj1[i]
    }
  }
  return res
}

module.exports = {
  getCommonCharacterCount
};
