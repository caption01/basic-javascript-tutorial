const { checkForAppleGadget } = require('../exam/array1');

const IPHONE = 'iphone';
const IPAD = 'ipad';
const MACBOOK = 'macbook';

describe.skip('Testing for array1 exam', () => {
  test('case 1', () => {
    const people = [{ name: 'A', age: 10, gadget: [IPHONE, IPAD, MACBOOK] }];
    const result = checkForAppleGadget(people);
    expect(result).toBeTruthy();
  });

  test('case 2', () => {
    const people = [
      { name: 'A', age: 10, gadget: [IPHONE, IPAD] },
      { name: 'B', age: 10, gadget: [IPHONE, IPAD] },
    ];
    const result = checkForAppleGadget(people);
    expect(result).toBeFalsy();
  });

  test('case 3', () => {
    const people = [
      { name: 'A', age: 10, gadget: [IPHONE, IPAD] },
      { name: 'B', age: 10, gadget: [IPHONE, IPAD, MACBOOK] },
    ];
    const result = checkForAppleGadget(people);
    expect(result).toBeTruthy();
  });

  test('case 4', () => {
    const people = [];
    const result = checkForAppleGadget(people);
    expect(result).toBeFalsy();
  });
});
