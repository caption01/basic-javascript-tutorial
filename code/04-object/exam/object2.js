/**
 * Task description: Write a function that checking empty of object.
 * Expected Result: true if object is empty or have only one key with undefine value else return false
 * @param data - object of data
 * @returns {boolean}
 * case 1 -> { a: '1', b: 2, c: true } -> false
 * case 2 -> { c: true } -> false
 * case 3 -> { d: undefined, e: true } -> false
 * case 4 -> { f: undefined } -> true
 * case 5 -> {} -> true
 */

function isEmpty(data) {
  const dataKeys = Object.keys(data);

  if (dataKeys.length === 0) {
    return true;
  }

  return !dataKeys.filter(
    (key) => data[key] || data[key] === 0 || data[key] === false
  ).length;
}

module.exports = { isEmpty };
