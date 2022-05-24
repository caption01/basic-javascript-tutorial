const car = {
  brand: 'Tesra',
  year: 2022,
  model: 'X',
  version() {
    return `${this.brand}-${this.model}-${this.year}`;
  },
};

// bind
function modelXSale() {
  const version = this.version();
  console.log(`${version} sale 50% !!`);
}

const logModelXSale = modelXSale.bind(car);

logModelXSale();

// apply & call
// function modelZSale(model, year) {
//   this.model = model;
//   this.year = year;

//   const version = this.version();
//   console.log(`${version} sale 50% !!`);
// }

// modelZSale.call(car, 'Y', '2023');
// modelZSale.apply(car, ['Y', '2023']);
