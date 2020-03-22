import {IValidator} from '../../_interfaces/validator.interface';

export const validator: IValidator = {
    validate: (zipCode: string): boolean => {
        return !!zipCode.match('^[0-9]{5}') && !zipCode.substring(0, 2).match('^05|43|65') && zipCode.length === 5;
    },
    name: 'German zip code validator',
    format: '00000'
};
