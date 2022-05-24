function process(a, b, c) {
  a = 20;
  b = 'bar';
  c.age = 30;

  console.log('in process', { a, b, c });
}

function main() {
  const a = 10; //primitive
  const b = 'foo'; //primitive
  const c = {
    name: 'bom',
    age: 25,
  };

  process(a, b, c);

  console.log('in main', { a, b, c });
}

main();
