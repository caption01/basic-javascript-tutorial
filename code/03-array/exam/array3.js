/**
 * Task description: Write a function that find a index for largest item value that match condition
 * Expected Result: index
 * @param condition - function that having condition to execute
 * @param lists - lists of numbers
 * @returns {number}
 * case 1 -> ((x) => x > 10, [20, 5, 15, 10]) => 0
 * case 2 -> ((x) => x % 2 === 0, [5, 20, 15, 10]) => 1
 * case 3 -> ((x) => 10 < x < 20, [20, 5, 15, 17, 10]) => 3
 */

function findingIndex(condition = () => {}, lists = []) {
  const numberPassCondition = lists.filter((number) => {
    if (condition(number)) {
      return number;
    }
  });

  console.log({ numberPassCondition });

  const maxNumber = Math.max(...numberPassCondition);
  const indexOfMaxNumber = lists.indexOf(maxNumber);

  return indexOfMaxNumber;
}

module.exports = {
  findingIndex,
};
