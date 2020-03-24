import { IValidator } from '../../_interfaces/validator.interface';
import { tin } from './tin';
import {ausweisValidator} from "./ausweis";

export const deDocuments: {[key: string]: IValidator} = {
  tin,
  personalId: ausweisValidator
};
