const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const obj1 = {};
  const obj2 = {};
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
    obj1[s1[i]] = (obj1[s1[i]] || 0) + 1;
  }
  for (let i = 0; i < s2.length; i++) {
    obj2[s2[i]] = (obj2[s2[i]] || 0) + 1;
  }
  for (const key in obj1) {
    result += obj1[key] && obj2[key] ? Math.min(obj1[key], obj2[key]) : 0;
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
