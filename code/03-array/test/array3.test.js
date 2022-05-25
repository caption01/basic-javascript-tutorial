const { findingIndex } = require('../exam/array3');

describe.skip('Testing for array3 exam', () => {
  test('case 1', () => {
    const condition1 = (x) => x > 10;
    const lists = [20, 5, 15, 10];
    const result = findingIndex(condition1, lists);

    expect(result).toEqual(0);
  });

  test('case 2', () => {
    const condition2 = (x) => x % 2 === 0;
    const lists = [5, 20, 15, 10];
    const result = findingIndex(condition2, lists);

    expect(result).toEqual(1);
  });

  test('case 3', () => {
    const condition3 = (x) => 10 < x && x < 20;
    const lists = [20, 5, 15, 17, 10];
    const result = findingIndex(condition3, lists);

    expect(result).toEqual(3);
  });
});
