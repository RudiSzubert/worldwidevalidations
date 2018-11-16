import {IValidator} from '../_interfaces/validator.interface';
import {validator as plValidator} from './pl/validator';

export const zipCodeValidators: {[key: string]: IValidator} = {
    PL: plValidator
};