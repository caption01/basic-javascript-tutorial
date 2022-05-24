const { isEmpty } = require('../exam/object2');

describe.skip('Testing for object2 exam', () => {
  test('case 1', () => {
    const data = { a: '1', b: 2, c: true };
    const result = isEmpty(data);
    expect(result).toBeFalsy();
  });

  test('case 2', () => {
    const data = { c: true };
    const result = isEmpty(data);
    expect(result).toBeFalsy();
  });

  test('case 3', () => {
    const data = { d: undefined, e: true };
    const result = isEmpty(data);
    expect(result).toBeFalsy();
  });

  test('case 4', () => {
    const data = { f: undefined };
    const result = isEmpty(data);
    expect(result).toBeTruthy();
  });

  test('case 5', () => {
    const data = {};
    const result = isEmpty(data);
    expect(result).toBeTruthy();
  });
});
