let a = 10;
let b = 'foo';
const c = {
  name: 'bom',
  age: 25,
};

function main(a, b, c) {
  a = 20;
  b = 'bar';
  c.age = 50;
}

main(a, b, c);

console.log({ a, b, c });
