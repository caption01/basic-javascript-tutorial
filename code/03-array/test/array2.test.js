const { seperateArrayXY } = require('../exam/array2');

describe.skip('Testing for array2 exam', () => {
  test('case 1', () => {
    const lists = [
      ['x', 10],
      ['x', 20],
      ['y', 1],
      ['y', 5],
    ];
    const result = seperateArrayXY(lists);

    expect(result).toEqual({ x: [10, 20], y: [1, 5] });
  });

  test('case 2', () => {
    const lists = [['x', 100], ['x', 200], ['y', null], ['y', 23], []];
    const result = seperateArrayXY(lists);

    expect(result).toEqual({ x: [100, 200], y: [23] });
  });

  test('case 3', () => {
    const lists = [];
    const result = seperateArrayXY(lists);

    expect(result).toEqual({ x: [], y: [] });
  });
});
