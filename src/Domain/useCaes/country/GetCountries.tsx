import {CountryRepositoryImpl} from "../../../Data/repositories/CountryRepository";

const { fetchCountries } = new CountryRepositoryImpl();

export const FetchCountriesUseCase = async () => {
   return await fetchCountries();
}
