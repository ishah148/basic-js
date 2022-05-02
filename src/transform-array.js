const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
//  --discard-next
//  --discard-prev
//  --double-next 
//  --double-prev
function transform(arr) {
  // console.log(arr)
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length == 0) { return []; }
  if (!(arr.find(i => `${i}`.includes('--')))) {
    return arr
  }
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i-1] === '--discard-next' && (arr[i+1] === '--double-prev' || arr[i+1] === '--discard-prev')){
      // console.log('555')
      // res.pop()
      arr[i] = '--'
      continue
    }
    res.push(arr[i])
    if (arr[i - 1] === '--discard-next') {
      res.pop()
      res.pop()
      // arr.splice(i + 1, 1)
      // res.pop()
    }
    if (arr[i] === '--discard-prev') {
      // arr.splice(i - 1, 1)
      res.pop()
      res.pop()
    }
    if (arr[i] === '--double-next') {
      // arr.splice(i + 1, 0, arr[i + 1])
      res.pop()
      res.push(arr[i + 1])
    }
    if (arr[i] === '--double-prev' && i!== 0) {
      // arr.splice(i - 1, 0, arr[i + 1])
      res.pop()
      res.push(arr[i - 1])

    }
    // console.log(res)
  }
  return res.filter(i => typeof (i) === 'number')
  // return arr.filter(i => typeof (i) === 'number')
  // console.log(arr.filter(i => typeof(i) === 'number'))

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
console.log('11111')
module.exports = {
  transform
};
// console.log(transform([1, 2, 3, 11, '--discard-next', 4, 5])) //[1, 2, 3, 4, 4, 5]
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--discard-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])) //[1, 2, 3, 1337, 4, 5])
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])) //[1, 2, 3, 4, 5]?
console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])) //  [1, 2, 3, 1337, 4, 5]
// console.log((transform(['--discard-prev', 1, 2, 3])))
// console.log((transform(['--double-prev', 1, 2, 3])))
// console.log((transform([1, 2, 3, '--double-next'])))
// console.log((transform([1, 2, 3, '--discard-next'])))
