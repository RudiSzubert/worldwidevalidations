import {IValidator} from '../../_interfaces/validator.interface';

export const validator: IValidator = {
    validate: (zipCode: string) => {
        return true;
    },
    name: 'Poland zip code validator',
    format: '00-000'
};