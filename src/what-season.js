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
  throw new NotImplementedError('Not implemented');
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',date)
  if (!date) { return 'Unable to determine the time of year!' }
  let res;
  function getMonthStr(month) {
    const seasons = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"];
    return seasons[month]
  }

  if (Object.prototype.toString.call(date) === "[object Date]") {
    if (isNaN(date)) {
      return 'Invalid date!';
    } else {
      res = getMonthStr(date.getMonth())
    }
  } else {
    return 'Invalid date!';
  }

  return res;
}






module.exports = {
  getSeason
};
