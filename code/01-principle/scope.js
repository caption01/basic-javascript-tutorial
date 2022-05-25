function upper() {
  let name = 'john';

  function inner() {
    name = 'debby';
    console.log('innner ->', name);
  }

  inner();

  console.log('upper ->', name);
}

upper();

// function main() {
//   const fruit = 'apple';

//   if (true) {
//     const fruit = 'banana';
//     console.log('in if -->', fruit);
//   }

//   console.log('aftter if -->', fruit);
// }

// main();
