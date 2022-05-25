/**
 * Task description: Write a function that return objects of array of vars X and Y
 * by given lists of XY position with truthy value
 * Expected Result: array of x, array of y
 * @param lists - lists of XY position
 * @returns {boolean}
 * case 1 -> [['x', 10], ['x', 20], ['y', 1], ['y', 5]] -> {x: [10, 20], y: [1, 5]}
 * case 2 -> [['x', 100], ['x', 200], ['y', null], ['y', 23], []] -> {x: [100, 200], y: [23]}
 * case 3 -> [] -> {x: [], y: []}
 */

function seperateArrayXY(lists = []) {
  let position = {
    x: [],
    y: [],
  };

  if (lists.length === 0) return position;

  const arrayX = lists
    .map((item) => {
      const [pos, value] = item;
      if (pos === 'x' && Boolean(value)) return value;
    })
    .filter(Boolean);

  const arrayY = lists.reduce((sum, item) => {
    const [pos, value] = item;

    if (pos === 'y' && Boolean(value)) {
      return [...sum, value];
    }

    return sum;
  }, []);

  position.x = arrayX;
  position.y = arrayY;

  return position;
}

module.exports = {
  seperateArrayXY,
};
