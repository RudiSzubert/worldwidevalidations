import { IValidator } from '../../_interfaces/validator.interface';

export const validator: IValidator = {
  validate: (num: string): boolean => {
    return num.length === 10;
  },
  name: 'German ausweisnummer validator',
  format: 'XXXXXXXXXX',
  label: 'Ausweis'
};
