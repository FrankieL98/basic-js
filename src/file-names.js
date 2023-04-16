const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const obj = {};
  const result = [];

  names.forEach(el => {
    if (result.includes(el)) {
      obj[el] === undefined ? obj[el] = 1 : obj[el]++;
    } else {
      obj[el] === undefined ? obj[el] = 0 : obj[el]++;
    }

    result.push(obj[el] ? `${el}(${obj[el]})` : el);
  });

  return result;
}

module.exports = {
  renameFiles
};
