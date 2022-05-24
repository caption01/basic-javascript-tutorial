// example of useful case from object.

function mySlowFunction(baseNumber) {
  console.time('mySlowFunction');
  let result = 0;
  for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  }
  console.timeEnd('mySlowFunction');

  return result;
}

const PROCESS_A = { processId: 'a', baseNumber: '11' };
const PROCESS_B = { processId: 'b', baseNumber: '13' };

const orders = [PROCESS_A, PROCESS_B, PROCESS_A, PROCESS_A, PROCESS_B];

function main() {
  orders.forEach(({ processId, baseNumber }) => {
    const value = mySlowFunction(baseNumber);
    console.log('output is', value);
  });
}

function mainWithCache() {
  let outputCache = {};

  orders.forEach(({ processId, baseNumber }) => {
    if (outputCache[processId]) {
      console.log('hit Cache', processId);
      return outputCache[processId];
    }

    const value = mySlowFunction(baseNumber);
    console.log('output is', value);
    outputCache[processId] = value;
  });
}

main();
