import { IValidator } from '../../_interfaces/validator.interface';

export const validator: IValidator = {
      validate: (avs: string): boolean => {
        return !!avs.match('^[0-9]{2}\\-[0-9]{3}$');
      },
  name: 'Swiss social security number validator',
  format: '000.000.000.000',
  label: 'AVS'
};
