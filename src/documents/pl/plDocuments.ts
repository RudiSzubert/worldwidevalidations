import { IValidator } from '../../_interfaces/validator.interface';
import { personalId } from './personalId';
import { nip } from './nip';

export const plDocuments: {[key: string]: IValidator} = {
  personalId,
  nip
};