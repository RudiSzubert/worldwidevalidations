import { IValidator } from '../../_interfaces/validator.interface';

export const tin: IValidator = {
    label: 'UID',
    name: 'Swiss UID',
    format: 'CHE-000.000.000',
    validate: (tinNumber: string): boolean => {
        return !!tinNumber.match('(CHE)?[-]?([0-9]{3}[.]?){3}(MWST|TVA|IVA)?/i');
    }
};
