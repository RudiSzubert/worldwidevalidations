import {IValidator} from '../_interfaces/validator.interface';
import {validator as plValidator} from './pl/validator';
import {validator as chValidator} from './ch/validator';
import {validator as deValidator} from './de/validator';

export const zipCodeValidators: {[key: string]: IValidator} = {
    PL: plValidator,
    CH: chValidator,
    DE: deValidator,
};
