import CountryViewController from "../../view-controllers/CountryViewController";
import './styles.css'
import {CustomButton} from "../../components/CustomButton";
import {CountrySelector} from "../../components/CountrySelector";
import {Alert} from "../../components/Alert";

const Country = () => {
   const {
      alert,
      countries,
      isOpen,
      search,
      selectedCountry,
      phoneNumber,
      handleSearch,
      handleCountrySelect,
      setIsOpen,
      handlePhoneNumberChange,
      generatePhonePlaceholder,
      handleSubmit
   } = CountryViewController();

   return (
      <div className='container-country'>
         {alert && <Alert message={alert.message} type={alert.type} />}
         <div className='phone-input-container'>
            <form className='phone-form' onSubmit={handleSubmit}>
               <div className='group-form'>
                  <div className='country-name'>
                     <CountrySelector
                        className="flag-selector"
                        onCountrySelect={handleCountrySelect}
                        data={countries}
                        isOpen={isOpen}
                        selectedCountry={selectedCountry}
                        search={search}
                        handleSearch={handleSearch}
                        setIsOpen={setIsOpen}
                     />
                  </div>
                  <input
                     className='phone-input'
                     type='text'
                     value={phoneNumber}
                     placeholder={generatePhonePlaceholder(parseInt(selectedCountry?.phone_length || '0', 10))}
                     onChange={handlePhoneNumberChange}
                  />
               </div>
               <CustomButton
                  className='submit-button'
                  type='submit'
                  title='SUBMIT'
               />
            </form>
         </div>
      </div>
   )
}
export default Country;
