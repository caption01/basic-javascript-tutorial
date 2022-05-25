// write function to check customer permission to open account
// age > 21 and income >= 5000
// if income >= 100000 ignore age condition

function openAccount(vip) {
  if (vip) {
    return 'Open VIP Account !!';
  }

  return 'Open Account';
}

const customer = {
  age: 30,
  income: 10000,
};

function bank(customer) {
  const customerAge = customer?.age || 0;
  const customerIncome = customer?.income || 0;

  if (customerAge > 21 && customerIncome >= 5000) {
    openAccount();
  }

  const isVip = customerIncome > 100000;

  if (isVip) {
    openAccount(isVip);
  }

  return 'thankyou';
}
