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
function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = '+';
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }

  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }

  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  if (typeof str !== 'string') {
    str = String(str);
  }

  if (typeof options.addition !== 'string' && options.addition !== undefined) {
    options.addition = String(options.addition);
  }

  let additions = [];
  for (let i = options.additionRepeatTimes; i > 0; i--){
    additions.push(options.addition);
  }

  let strings = [];
  for (let i = options.repeatTimes; i > 0; i--) {
    strings.push(`${str}${additions.join(options.additionSeparator)}`);
  }

  return strings.join(options.separator);
}

module.exports = {
  repeater
};
