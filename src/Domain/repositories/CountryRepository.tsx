import {Country} from "../entities/Country";
import {ResponseApi} from "../../Data/sources/remote/models/ResponseApi";
import {CountryNumber} from "../entities/CountryNumber";

export interface CountryRepository {
   fetchCountries(): Promise<Country[]>;
   sendCountryNumber(countryNumber: CountryNumber): Promise<ResponseApi>;
}
