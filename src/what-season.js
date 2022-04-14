const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  function getMonthStr(month) {
    const seasons = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"];
    return seasons[month]
  }

  return getMonthStr(date.getMonth())
  // remove line with error and write your code here
}

// console.log(getSeason(new Date(2150, 7, 21, 18, 36, 41, 841)))

module.exports = {
  getSeason
};
// const seasons = [
//   winter,
//   spring,
//   summer,
//   autumn,
// ]
// function getMonthStr(month) {
//   const seasons = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"];
//   return seasons[month]
// }

// let date = new Date(2020, 02, 31)
// console.log(date.getMonth())
