// declarative vs imperative
const doubleFnImperative = (numbers) => {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }

  return doubled;
};

const doubleDeclarative = (numbers) => numbers.map((n) => n * 2);

console.log('Imperative ->', doubleFnImperative([2, 3, 4]));
console.log('Declarative ->', doubleDeclarative([2, 3, 4]));
