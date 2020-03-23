import {IValidator} from '../_interfaces/validator.interface';
import {validator as plPersonalIdentification} from './pl/validator';
import {validator as chPersonalIdentification} from './ch/validator';
import {validator as dePersonalIdentification} from './de/validator';

export const personalIdentification: {[key: string]: IValidator} = {
    PL: plPersonalIdentification,
    DE: dePersonalIdentification,
    CH: chPersonalIdentification
};
