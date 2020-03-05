import {IValidator} from '../../_interfaces/validator.interface';

export const validator: IValidator = {
    validate: (zipCode: string): boolean => {
        return !!zipCode.match('/^[1-9]\\d{3}$/');
    },
    name: 'Swiss zip code validator',
    format: '0000'
};
