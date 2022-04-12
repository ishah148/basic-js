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

function createDreamTeam(team) {
  // if(!Array.isArray(team)){return false}
  return Array.isArray(team) && team.map(name => {
    if (typeof (name) === 'string') {
      return name.replace(/\s+/, '')[0].toUpperCase()
    } else {
      return ''
    }
  }).sort().join('')
}

console.log(createDreamTeam(false))
console.log(createDreamTeam(null))
console.log(createDreamTeam(undefined))
console.log(createDreamTeam({}))


module.exports = {
  createDreamTeam
};

// let team = ['Matt', 'Ann', 'Dmitry', null, [], 'Max'];

// let x = team && team.map(name => {
//   let regexp = /[a-zA-z]/gmi
//   return  && regexp.test(name[0]) ? name[0].toUpperCase() : ''
// }).sort().join('')

// console.log(x)
// team = ['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']
// AABDEEGKPP

//ADGJKMNPRSTW

// console.log(name)
// console.log(name[0].toUpperCase())
// let y = team.map(name => {
//   if (typeof (name) === 'string') {
//     return name.replace(/\s+/, '')[0].toUpperCase()
//   } else {
//     return ''
//   }
// }).sort().join('')

// console.log(y)
