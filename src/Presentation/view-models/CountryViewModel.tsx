import {useContext} from "react";
import {CountryContex} from "../context/CountryContext";

const CountryViewModel = () => {
   const {
      alert,
      countries,
      fetchCountries,
      sendCountryNumber}
      = useContext(CountryContex)

   return {
      fetchCountries,
      sendCountryNumber,
      countries,
      alert
   }
}
export default CountryViewModel;
