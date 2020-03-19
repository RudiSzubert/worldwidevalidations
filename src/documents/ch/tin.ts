import { IValidator } from '../../_interfaces/validator.interface';

export const tin: IValidator = {
    label: 'UID',
    name: 'Swiss UID',
    format: '000-00-0000',
    validate: (tinNumber: string): boolean => {
        return !!tinNumber.match('/^(CHE){0,1}[0-9]{9}$/i');
    }
};
