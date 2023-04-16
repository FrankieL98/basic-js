const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0, n, isTrue; j < matrix[i].length; j++) {
      n = i;
      match = true;

      while (n >= 0) {
        if (matrix[n][j] === 0) {
          match = false;
          break;
        }

        n--;
      }

      if (match) {
        result += matrix[i][j];
      }
    }
  }

  return result;
}

module.exports = {
  getMatrixElementsSum
};
