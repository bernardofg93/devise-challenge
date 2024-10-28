import {Country} from "../../../Domain/entities/Country";
import './styles.css'

interface Props {
   onCountrySelect: (country: Country, code: string) => void;
   data: Country[];
   isOpen: boolean;
   setIsOpen: (isOpen: boolean) => void;
   selectedCountry: Country | null;
   search: string;
   handleSearch?: (search: any) => void;
   className: string;
}

const CountrySelector = ({
                            onCountrySelect,
                            data,
                            isOpen,
                            setIsOpen,
                            selectedCountry,
                            search,
                            handleSearch,
                            className,
                         }: Props) => {

   return (
      <div className='container-selector'>
         <div
            onClick={() => setIsOpen(!isOpen)}
            className='box-filter'
         >
            {selectedCountry && (
               <>
                  <img
                     src={`https://flagcdn.com/16x12/${selectedCountry.code.toLowerCase()}.png`}
                     alt={selectedCountry.name}
                     style={{
                        marginRight: '4px',
                        width: '20px'
                     }}
                  />
                  <span>
                     {selectedCountry.calling_code}
                  </span>
               </>
            )}
         </div>
         {isOpen && (
            <div className='country-list'>
               <input
                  type='text'
                  value={search}
                  onChange={handleSearch}
                  placeholder='Search country'
                  className='input-search'
               />
               <ul className='container-list-country'>
                  {Object.entries(data)
                     .filter(([countryCode, country]) => country.name.toLowerCase().includes(search.toLowerCase()))
                     .map(([countryCode, country]) => (
                        <li
                           key={countryCode}
                           onClick={() => onCountrySelect(country, countryCode)}
                           className='list-country'
                        >
                           <img
                              src={`https://flagcdn.com/16x12/${countryCode.toLowerCase()}.png`}
                              alt={country.name}
                              style={{
                                 marginRight: '10px',
                              }}
                           />
                           <span>
                              {country.name}
                              ({country.calling_code})
                           </span>
                        </li>
                     ))}
               </ul>
            </div>
         )}
      </div>
   )
}
export default CountrySelector;
