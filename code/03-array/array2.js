// reduce, map, filter

const items = [1, 2, 3, 4, 5];

const doubleItems = items.map((number) => number * 2);
const evenItems = items.filter((number, index) => number % 2 === 0);
const sumItems = items.reduce((accumurate, number) => accumurate + number, 100);
