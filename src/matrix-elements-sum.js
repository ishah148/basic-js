const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
]
function getMatrixElementsSum(matrix) {
  let res = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let k = 0; k < matrix.length; k++) {
      if(matrix[k][i] === 0){break}
      console.log(matrix[k][i])
      res+=matrix[k][i]
    }
  }
  return res
}

module.exports = {
  getMatrixElementsSum
};
// let res = 0;
// console.log(matrix.length)
// console.log(matrix[0].length)
// console.log('===')

// // for (let arr of matrix) {
// //   console.log(arr)
// //   for (let elem of arr) {
// //     console.log(elem)
// //   }
// //   // if (arr[i] === 0) { break }
// //   // arr[i]++
// // }
// console.log('res = ',res)