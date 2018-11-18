import {CountryValidation} from './_classes/CountryValidation';
import {countries} from './countries';

export function getCountryValidation(countryIsoCode: string) {
    countryIsoCode = countryIsoCode.toUpperCase();
    if (countries[countryIsoCode]) {
        return new CountryValidation(countryIsoCode);
    }
    console.warn('Country currently unhandled. Please send email to mateusz.tadeja@gmail.com or fork and create' +
        'a pull request at https://github.com/RudiSzubert/worldwidevalidations if you need it');
}