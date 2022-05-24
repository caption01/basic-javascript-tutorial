/**
 * Task description: Write a function that checking if some people having all apple gadget.
 * Expected Result: true if some people having all require values('iphone', 'ipad', 'macbook') in 'gadget' key, false otherwise.
 * @param people - lists of people object
 * @returns {boolean}
 * case 1 -> [{ name: 'john', age: 25, gadget: ['iphone', 'ipad', 'macbook']}, { name: 'Dayim', age: 31, gadget: ['iphone']}] -> true
 * case 1 -> [{ name: 'john', age: 25, gadget: ['iphone', 'ipad', 'macbook']}] -> true
 * case 2 -> [{ name: 'john', age: 25, gadget: ['iphone']}, { name: 'Dayim', age: 31, gadget: ['ipad']}] -> false
 * case 3 -> [] -> false
 */

const IPHONE = 'iphone';
const IPAD = 'ipad';
const MACBOOK = 'macbook';

function checkForAppleGadget(people = []) {
  if (people.length === 0) return false;

  const result = people.some((p) => {
    const gadget = p?.gadget || [];

    const haveIphone = gadget.includes(IPHONE);
    const haveIpad = gadget.includes(IPAD);
    const haveMacbook = gadget.includes(MACBOOK);

    if (haveIphone && haveIpad && haveMacbook) return true;

    return false;
  });

  return result;
}

module.exports = {
  checkForAppleGadget,
};
