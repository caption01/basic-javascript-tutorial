// sex = MEN, age >= 21

const MEN = 'M';
const WOMEN = 'W';
const NONE = 'N';

const people = {
  sex: MEN,
  age: 5,
  health: true,
};

// unit-test
const isSexMatch = (sex) => {
  switch (sex) {
    case MEN:
      return true;
    case WOMEN:
    case NONE:
      return false;

    default:
      return false;
  }
};

// unit-test
const ageMatch = (age) => {
  if (age < 21) {
    return false;
  }

  return true;
};

const canConscription = ({ sex, age, health }) => {
  const sexMatch = isSexMatch(sex);
  const ageMatch = ageMatch(age);

  return sexMatch && ageMatch;
};

canConscription();
