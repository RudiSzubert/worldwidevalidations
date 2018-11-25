import {IValidator} from '../_interfaces/validator.interface';
import {plDocuments} from './pl/plDocuments';

export const documents: {[key: string]: {[key: string]: IValidator}} = {
    PL: plDocuments
};