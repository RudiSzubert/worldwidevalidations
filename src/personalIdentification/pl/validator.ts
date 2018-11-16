import {IValidator} from '../../_interfaces/validator.interface';

export const validator: IValidator = {
    validate: (PESEL: string) => {
        return true;
    },
    name: 'Poland PESEL validator',
    format: '000000-00000',
    label: 'PESEL',
};