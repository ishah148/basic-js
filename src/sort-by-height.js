const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
// arr = [-1, 150, 190, 170, -1, -1, 160, 180]
function sortByHeight(arr) {
  let indexes = []
  arr.forEach((elem,index) => {
    if(elem === -1){
      indexes.push(index)
    }
  });
  arr = arr.sort((a,b)=>a-b).filter(a=> a!== -1)
  indexes.forEach(index => {
    arr.splice(index,0,-1)
  })
  // console.log(arr)
  return arr
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
// console.log(sortByHeight(arr))