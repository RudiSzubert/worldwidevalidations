import {IValidator} from '../_interfaces/validator.interface';
import {plDocuments} from './pl/plDocuments';

export const documents: {[key: string]: Array<IValidator>} = {
    PL: plDocuments
};