function upper() {
  const name = 'one';

  function inner() {
    const name = 'two';
    console.log('inner', name);
  }

  inner();

  console.log('upper ', name);
}

upper();
