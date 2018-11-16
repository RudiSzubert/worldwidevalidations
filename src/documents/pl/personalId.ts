import {IValidator} from '../../_interfaces/validator.interface';

export const personalId: IValidator = {
    label: 'Dowód Osobisty',
    name: 'Polish number of personal identification document',
    format: 'AAA-000000',
    validate: () => { return true; }
};