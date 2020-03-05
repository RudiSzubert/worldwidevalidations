import { IValidator } from '../../_interfaces/validator.interface';

export const tin: IValidator = {
    label: 'TIN',
    name: 'Tax Identification number',
    format: '000000000',
    validate: (tinNumber: string): boolean => {
        return !!tinNumber.match('^(9\\d{2})([ \\-]?)([7]\\d|8[0-8])([ \\-]?)(\\d{4})$');
    }
};
