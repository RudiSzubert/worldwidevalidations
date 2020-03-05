import { IValidator } from '../../_interfaces/validator.interface';

export const validator: IValidator = {
      validate: (avs: string): boolean => {
        return !!(avs.match('756\\.?[0-9]{4}\\.?[0-9]{4}\\.?[0-9]{2}') || // new code (since 2008)
            avs.match('[0-9]{3}\\.?[0-9]{2}\\.?[0-9]{3}\\.?[0-9]{3}'));// old one
      },
  name: 'AVS - Swiss social security number validator',
  format: '000.000.000.000 or 756.0000.0000.00',
  label: 'AVS'
};
