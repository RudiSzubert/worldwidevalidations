import {companyOrganizationForms} from './companyOrganizationForms/companyOrganizationForms'
import {countries} from './countries';
import {documents} from './documents/documents'
import {IValidator} from './_interfaces/validator.interface';
import {zipCodeValidators} from './zipCodeValidators/zipCodeValidators';
import {personalIdentification} from './personalIdentification/personalIdentification';

export class CountryValidation {
  public zipCode: IValidator;
  public companyOrganizationForms: Array<string>;
  public documents: {[key: string]: IValidator};
  public isoCountryCode: string;
  public countryName: string;
  public personalIdentification: IValidator;

  constructor(countryIsoCode: string) {
    if (!countries[countryIsoCode]) {
      throw new Error('Country currently unhandled. Please send email to mateusz.tadeja@gmail.com or fork and create' +
        'a pull request at https://github.com/RudiSzubert/worldwidevalidations if you need it');
    }
    this.isoCountryCode = countryIsoCode;
    this.countryName = countries[countryIsoCode];
    this.zipCode = zipCodeValidators[countryIsoCode];
    this.documents = documents[countryIsoCode];
    this.companyOrganizationForms = companyOrganizationForms[countryIsoCode];
    this.personalIdentification = personalIdentification[countryIsoCode];
  }
}