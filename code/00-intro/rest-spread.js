const numbers = [1, 2, 3, 4, 5];

const [one, two, ...restNumber] = numbers;

const macbook = {
  chip: 'M1',
  ram: 256,
};

const macbookKeyArray = Object.keys(macbook);

let newMacbook = {};
for (let i = 0; i < macbookKeyArray.length; i++) {
  const macKey = macbookKeyArray[i];
  const macValue = macbook[macKey];

  newMacbook[macKey] = macValue;
}

console.log(newMacbook);

// const macbookPro = {
//   ...macbook,
//   chip: 'M2',
// };

// const macbookAir = {
//   ...macbook,
//   weight: '300g',
// };
