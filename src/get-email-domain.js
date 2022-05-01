const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const reg = /[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gi;
  return email.match(reg).join('')
}

module.exports = {
  getEmailDomain
};
getEmailDomain("someaddress@yandex.ru")