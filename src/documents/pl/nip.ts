import { IValidator } from '../../_interfaces/validator.interface';
import { onlyNumbers } from "../../helpers/regexps";

export const nip: IValidator = {
    label: 'NIP',
    name: 'Polish NIP',
    format: '0000000000',
    validate: (nipNumber: string): boolean => {
      if (!onlyNumbers(nipNumber) || nipNumber.length !== 10) {
        return false;
      }
      const _nip = nipNumber.split('').map((elem) => +elem );
      let sum = 6 * _nip[0] +
        5 * _nip[1] +
        7 * _nip[2] +
        2 * _nip[3] +
        3 * _nip[4] +
        4 * _nip[5] +
        5 * _nip[6] +
        6 * _nip[7] +
        7 * _nip[8];
      sum %= 11;
      return _nip[9] === sum;
    }
};