// while, for, for...in, for..of

const whileLoop = () => {
  let round = 10;

  while (round > 0) {
    round -= 1;
    console.log(`while loop round ${round}`);
  }
};

const forLoop = () => {
  for (let round = 10; round > 0; round--) {
    console.log(`for loop round ${round}`);
  }
};

// for iterating object properties not recommend for array
const forInLooop = () => {
  const round = {
    a: { value: 1 },
    b: { value: 2 },
    c: { value: 3 },
  };

  for (let prop in round) {
    console.log(prop);
  }
};

// handle iterable
const forOfLoop = () => {
  const round = [...Array(10).keys()];
  // const roundLists = [{ value: 1 }, { value: 2 }, { value: 3 }];

  for (let r of round) {
    console.log(r);
  }
};

forInLooop();
