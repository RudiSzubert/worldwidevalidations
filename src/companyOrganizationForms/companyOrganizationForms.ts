import {companyOrganizationForms as plList} from './pl/list';
import {companyOrganizationForms as chList} from './ch/list';
import {companyOrganizationForms as deList} from './de/list';

export const companyOrganizationForms: {[key: string]: Array<string>} = {
    PL: plList,
    CH: chList,
    DE: deList,
};
