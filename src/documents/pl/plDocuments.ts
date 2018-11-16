import {IValidator} from '../../_interfaces/validator.interface';
import {personalId} from './personalId';

export const plDocuments: Array<IValidator> = [
    personalId
];