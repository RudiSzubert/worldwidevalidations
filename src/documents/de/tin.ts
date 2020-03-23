import { IValidator } from '../../_interfaces/validator.interface';

export const tin: IValidator = {
    label: 'UID',
    name: 'German UID',
    format: 'DE-000.000.000',
    validate: (tinNumber: string): boolean => {
        return !!tinNumber.match('(DE)?[-]?([0-9]{3}[.]?){3}');
    }
};
