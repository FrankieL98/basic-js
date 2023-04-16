const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let result = [];
  const dn = '--discard-next';
  const ddn = '--double-next';
  const dp = '--discard-prev';
  const ddp = '--double-prev';

  for (let index = 0; index < arr.length; index++) {
    let checkB = index > 0;
    let checkE = index < arr.length - 1;
    let prev = arr[index - 1];
    let current = arr[index];
    let next = arr[index + 1];
    let k = 1;

    if (checkB && prev === dn) {
        k--;
    }
    if (checkB && prev === ddn) {
        k++;
    }
    if (checkE && next === dp) {
        k--;
    }
    if (checkE && next === ddp) {
        k++;
    }
    if (current !== dn && current !== ddn && current !== dp && current !== ddp && prev !== dn) {
        for (let index = 1; index <= k; index++) {
            result.push(current);
        }
        if (k < 1 && prev === dn && next === dp) {
            result.pop();
        }
    }
}

return result;
}

module.exports = {
  transform
};
