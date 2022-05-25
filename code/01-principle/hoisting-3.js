const multiple = (x) => {
  return (y) => {
    return x * y;
  };
};

const main = () => {
  const multiPleByFive = multiple(5);
  const result = multiPleByFive(10);
  return result;
};

main();
