// flat, flatMap, reverse
const numbers = [[1], [2], [3], [4]];

const numberFlat = numbers.flat();

const sentences = ['JavaScript Array flatMap()', 'is a', 'Awesome'];

const wordsMap = sentences.map((s) => s.split(' '));
const wordsFlatMap = sentences.flatMap((s) => s.split(' '));

const reverseWords = [...wordsFlatMap].reverse();
