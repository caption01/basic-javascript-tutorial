function one() {
  const name = 'one';

  function two() {
    const name = 'two';
    console.log(name);
  }

  two();

  console.log(name);
}

one();
