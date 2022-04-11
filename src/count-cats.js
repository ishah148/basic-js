const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(a) {
  // throw new NotImplementedError('Not implemented');
  return a.reduce((res, cats) => {
    return res + cats.reduce((r, cat) => {
      return r + (cat==='^^'?1:0)
    }, 0)
  }, 0)
  
}

module.exports = {
  countCats
};
