import {CountryRepository} from "../../Domain/repositories/CountryRepository";
import {Country} from "../../Domain/entities/Country";
import {AxiosError} from "axios";
import {Api} from "../sources/remote/api/Api";
import {ResponseApi} from "../sources/remote/models/ResponseApi";
import {CountryNumber} from "../../Domain/entities/CountryNumber";

export class CountryRepositoryImpl implements CountryRepository {
   async fetchCountries(): Promise<Country[]> {
      try {
         const response = await Api.get<Country[]>(`/challenges/countries`);
         return Promise.resolve(response.data)
      } catch (error) {
         let e = (error as AxiosError);
         console.log('ERROR: ' + JSON.stringify(e.response?.data));
         return Promise.resolve([]);
      }
   }

   async sendCountryNumber(countryNumber: CountryNumber): Promise<ResponseApi> {
      try {
         const response = await Api.post<ResponseApi>(
            '/challenges/two_factor_auth',
            {},
            {
               params: {
                  phone_number: countryNumber?.phone_number,
                  country_id: countryNumber?.country_id
               }
            }
         )
         return Promise.resolve(response.data)
      } catch (e) {
         let error = (e as AxiosError);
         console.log('ERROR: ' + JSON.stringify(error.response?.data));
         const apiError: ResponseApi = JSON.parse(JSON.stringify(error.response?.data));
         return Promise.resolve(apiError)
      }
   }
}
