function main() {
  const age = 25;

  const result = isAdult(age);
  return result;
}

function isAdult(age) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

main();
