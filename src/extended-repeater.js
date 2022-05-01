const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(string, obj) {
  let result = ''
  let addition = '';

  if ('addition' in obj) {
    for (let i = 0; i < (obj.additionRepeatTimes || 1); i++) {
      if (i) {
        addition += (obj.additionSeparator || '|');
      } else {
        addition += ''
      }
      addition += obj.addition;
    }
  }

  for (let i = 0; i < (obj.repeatTimes || 1); i++) {
    result += string + addition;
    if (i != (obj.repeatTimes || 1) - 1) {
      result += obj.separator || '+';
    }
  }
  return result ? result : string
}

module.exports = {
  repeater
};
