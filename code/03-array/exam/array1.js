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

function checkForAppleGadget(people) {}

module.exports = {
  checkForAppleGadget,
};
