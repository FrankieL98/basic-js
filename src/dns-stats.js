const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  domains.forEach((k, i, j) => {
    let fromI = 0;
    let str = '';
    j[i] = k.split('.').reverse().join('.');
    while (~j[i].indexOf('.', fromI)) {
      fromI = j[i].indexOf('.', fromI) + 1;
      str = j[i].substring(0, fromI - 1);
      obj['.' + str] = (obj['.' + str] || 0) + 1;
    }
    obj['.' + j[i]] = (obj['.' + j[i]] || 0) + 1;
  });
  return obj;
}

module.exports = {
  getDNSStats
};
