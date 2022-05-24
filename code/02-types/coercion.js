// 1. string coercion
const value1 = 10;
const value2 = '5';

const sum = value1 + value2; // '105'

// 2. number coercion
const value3 = [100];
const value4 = 10;

const divide = value3 / value4; // 3

// 3. array object
const value5 = [] + null + [2]; // 'null2'

