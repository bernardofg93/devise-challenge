import {CountryRepositoryImpl} from "../../../Data/repositories/CountryRepository";
import {CountryNumber} from "../../entities/CountryNumber";

const { sendCountryNumber } = new CountryRepositoryImpl();

export const SendCountryUseCase = async (countryNumber: CountryNumber) => {
   return await sendCountryNumber(countryNumber);
}
