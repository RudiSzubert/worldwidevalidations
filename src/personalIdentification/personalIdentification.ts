import {IValidator} from '../_interfaces/validator.interface';
import {validator as plPersonalIdentification} from './pl/validator';
import {validator as chPersonalIdentification} from './ch/validator';

export const personalIdentification: {[key: string]: IValidator} = {
    PL: plPersonalIdentification,
    CH: chPersonalIdentification
};
