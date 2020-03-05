import {IValidator} from '../_interfaces/validator.interface';
import {plDocuments} from './pl/plDocuments';
import {chDocuments} from './ch/chDocuments';

export const documents: {[key: string]: {[key: string]: IValidator}} = {
    PL: plDocuments,
    CH: chDocuments
};
