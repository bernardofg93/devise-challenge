import {Country} from "../../Domain/entities/Country";
import {createContext, useEffect, useState} from "react";
import {FetchCountriesUseCase} from "../../Domain/useCaes/country/GetCountries";
import {SendCountryUseCase} from "../../Domain/useCaes/country/SendCountry";
import {ResponseApi} from "../../Data/sources/remote/models/ResponseApi";
import {CountryNumber} from "../../Domain/entities/CountryNumber";

export interface CountryContextProps {
   alert: any,
   countries: Country[],

   fetchCountries(): Promise<void>,

   sendCountryNumber(countryNumber: CountryNumber): Promise<ResponseApi>
}

export const CountryContex = createContext({} as CountryContextProps);

export const CountryProvider = ({children}: any) => {
   const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
   const [countries, setCountries] = useState<Country[]>([]);

   useEffect(() => {
      if (alert) {
         setTimeout(() => {
            setAlert(null);
         }, 3000)
      }
   }, [alert])

   const fetchCountries = async (): Promise<void> => {
      const result = await FetchCountriesUseCase();
      setCountries(result);
   }

   const sendCountryNumber = async (countryNumber: CountryNumber): Promise<ResponseApi> => {
      const response = await SendCountryUseCase(countryNumber);
      if (response.error) {
         setAlert({message: 'Something went wrong!', type: 'error'});
      } else {
         setAlert({message: 'Your Phone number has been saved successfully.', type: 'success'});
      }
      return response;
   }

   return (
      <CountryContex.Provider value={{
         alert,
         countries,
         fetchCountries,
         sendCountryNumber
      }}>
         {children}
      </CountryContex.Provider>
   )

}
