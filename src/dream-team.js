const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code her
}

module.exports = {
  createDreamTeam
};

// let team = ['Matt', 'Ann', 'Dmitry', null, [], 'Max'];
let team = ['Olivia', 1111, 'Lily', 'Oscar', true, null]
let x = team && team.map(name => {
    let regexp = /[a-zA-z]/gmi
    return name && !Array.isArray(name) && regexp.test(name[0]) ? name[0].toUpperCase() : ''
  }).sort().join('')

console.log(x)