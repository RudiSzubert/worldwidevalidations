import {IValidator} from '../../_interfaces/validator.interface';

export const validator: IValidator = {
    validate: (zipCode: string): boolean => {
        return !!zipCode.match('[0-9]{2}\\-[0-9]{3}');
    },
    name: 'Poland zip code validator',
    format: '00-000'
};