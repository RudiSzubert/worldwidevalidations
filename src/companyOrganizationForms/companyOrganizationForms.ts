import {companyOrganizationForms as plList} from './pl/list';
import {companyOrganizationForms as chList} from './ch/list';

export const companyOrganizationForms: {[key: string]: Array<string>} = {
    PL: plList,
    CH: chList,
};
