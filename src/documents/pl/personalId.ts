import {IValidator} from '../../_interfaces/validator.interface';

export const personalId: IValidator = {
    label: 'Dowód Osobisty',
    name: 'Polish number of personal identification document',
    format: 'AAA000000',
    validate: (idNumber: string) => {
      idNumber = idNumber.toUpperCase();
      if (idNumber.length !== 9) { return false; }
      const numbersArray = translateLettersToNumbers(idNumber);
      if (numbersArray.length !== 9) {
        return false;
      }
      return checkControlProduct(numbersArray);
    }
};

function translateLettersToNumbers(idNumber: string): Array<number> {
  const numbersArray: Array<number> = [];
  for (let i = 0; i < 3; i++) {
    if (letterValues[idNumber[i]]) {
      numbersArray.push(letterValues[idNumber[i]]);
    }
  }
  for (let i = 3; i < 10; i++) {
      const num = parseInt(idNumber[i], 10);
      if (!isNaN(num)) { numbersArray.push(num); }
  }
  return numbersArray;
}

function checkControlProduct(numbersArray: Array<number>): boolean  {
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += numbersArray[i] * numbersWeightArr[i];
  }
  return sum % 10 === 0;
}

const numbersWeightArr: Array<number> = [7, 3, 1, 9, 7, 3, 1, 7, 3];
const letterValues: {[key: string]: number} = {
  A: 10, B: 11, C: 12, D: 13, E: 14,
  F: 15, G: 16, H: 17, I: 18, J: 19,
  K: 20, L: 21, M: 22, N: 23, O: 24,
  P: 25, Q: 26, R: 27, S: 28, T: 29,
  U: 30, V: 31, W: 32, X: 33, Y: 34,
  Z: 35
};