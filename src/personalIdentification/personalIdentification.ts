import {IValidator} from '../_interfaces/validator.interface';
import {validator as plPersonalIdentification} from './pl/validator';

export const personalIdentification: {[key: string]: IValidator} = {
    PL: plPersonalIdentification
};