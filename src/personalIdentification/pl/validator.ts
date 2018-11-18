import { IValidator } from '../../_interfaces/validator.interface';

export const validator: IValidator = {
  validate: (pesel: string) => {
    const reg = /^[0-9]{11}$/;
    if (!reg.test(pesel)) {
      return false;
    }
    const dig = ('' + pesel).split('');
    let control = (1 * parseInt(dig[0], 10) + 3 * parseInt(dig[1], 10) +
      7 * parseInt(dig[2], 10) + 9 * parseInt(dig[3], 10) +
      1 * parseInt(dig[4], 10) + 3 * parseInt(dig[5], 10) +
      7 * parseInt(dig[6], 10) + 9 * parseInt(dig[7], 10) +
      1 * parseInt(dig[8], 10) + 3 * parseInt(dig[9], 10)) % 10;
    if (control === 0) {
      control = 10;
    }
    control = 10 - control;
    return parseInt(dig[10], 10) === control;
  },
  name: 'Poland PESEL validator',
  format: '00000000000',
  label: 'PESEL'
};