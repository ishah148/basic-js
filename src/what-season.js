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
  if (!date) { return 'Unable to determine the time of year!' }
  let res;
  function getMonthStr(month) {
    const seasons = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"];
    return seasons[month]
  }
  try {
    // res = getMonthStr(date.getMonth());
    if (date.getUTCDate()) {
      res = getMonthStr(date.getMonth())
    }
  } catch (e) {
    res =  'Invalid date!';
  }
  // console.log('date =========',date)
  return res;
}

// console.log(getSeason(new Date(2150, 7, 21, 18, 36, 41, 841)))


const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};

const deeperFakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  getMonth() {
      return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
      return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
      return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
      return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
      return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
      return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
      return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
      return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  },
  [Symbol.toStringTag]: 'Date'
};

module.exports = {
  getSeason
};

console.log(getSeason('foo'))
console.log(getSeason({ John: 'Smith' }))
console.log(getSeason(20192701))
console.log(getSeason([2019, '27', 0 + '1']))
console.log(getSeason(() => new Date()))
console.log(getSeason(fakeDate))
console.log(getSeason(deeperFakeDate))