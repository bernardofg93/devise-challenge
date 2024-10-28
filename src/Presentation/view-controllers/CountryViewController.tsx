import CountryViewModel from "../view-models/CountryViewModel";
import React, {useEffect, useState} from "react";
import {Country} from "../../Domain/entities/Country";

const CountryViewController = () => {
   const [search, setSearch] = useState('');
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [phoneNumber, setPhoneNumber] = useState('');
   const [selectedCountry, setSelectedCountry] = useState<Country | null>({
      id: '3',
      name: 'United States',
      calling_code: '+1',
      phone_length: '10',
      code: "US"
   });

   const {
      sendCountryNumber,
      fetchCountries,
      countries,
      alert
   } = CountryViewModel();

   useEffect(() => {
      fetchCountries();
   }, [])

   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
   }

   const handleCountrySelect = (country: Country, code: string) => {
      country.code = code;
      setSelectedCountry(country);
      setPhoneNumber('')
      setIsOpen(false)
   }

   const formatPhoneNumberBasedOnLength = (input: string, phoneLength: number, isDeleting: boolean): string => {
      const numericInput = input.replace(/\D/g, '');
      let formattedNumber = '';

      if (isDeleting && numericInput.length === 0) {
         return '';
      }

      if (phoneLength === 10) {
         const areaCode = numericInput.slice(0, 3);
         const centralOfficeCode = numericInput.slice(3, 6);
         const lineNumber = numericInput.slice(6, 10);
         formattedNumber = `(${areaCode})${centralOfficeCode}-${lineNumber}`;
      } else if (phoneLength === 9) {
         const areaCode = numericInput.slice(0, 3);
         const lineNumber = numericInput.slice(3, 9);
         formattedNumber = `(${areaCode})${lineNumber}`;
      } else {
         formattedNumber = numericInput;
      }

      if (isDeleting) {
         if (formattedNumber.endsWith('-') || formattedNumber.endsWith(')') || formattedNumber.endsWith('(')) {
            formattedNumber = formattedNumber.slice(0, -1);
         }
      }

      return formattedNumber;
   };

   const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const isDeleting = e.nativeEvent instanceof InputEvent && e.nativeEvent.inputType === 'deleteContentBackward';
      const phoneLength = parseInt(selectedCountry?.phone_length || '0', 10);
      const updatedValue = applyPhoneMask(e.target.value, phoneLength, isDeleting);
      setPhoneNumber(updatedValue);
   };

   const generatePhonePlaceholder = (phoneLength: number): string => {
      let placeholder = '';
      if (phoneLength <= 7) {
         placeholder = '0'.repeat(phoneLength);
      } else if (phoneLength === 9) {
         placeholder = '(000)000000';
      } else if (phoneLength === 10) {
         placeholder = '(000)000-0000';
      } else if (phoneLength === 11) {
         placeholder = '(000)0000-000';
      } else if (phoneLength === 12) {
         placeholder = '(000)00000-000';
      } else if (phoneLength === 13) {
         placeholder = '(000)000000-000';
      } else {
         placeholder = '0'.repeat(phoneLength);
      }
      return placeholder;
   };

   const applyPhoneMask = (input: string, phoneLength: number, isDeleting: boolean): string => {
      const numericInput = input.replace(/\D/g, '');
      let formattedNumber = '';

      const validInput = numericInput.slice(0, phoneLength);

      if (isDeleting) {
         return validInput;
      }

      if (phoneLength === 10) {
         const areaCode = validInput.slice(0, 3);
         const centralOfficeCode = validInput.slice(3, 6);
         const lineNumber = validInput.slice(6, 10);
         formattedNumber = `(${areaCode})${centralOfficeCode}-${lineNumber}`;
      } else if (phoneLength === 9) {
         const areaCode = validInput.slice(0, 3);
         const lineNumber = validInput.slice(3, 9);
         formattedNumber = `(${areaCode})${lineNumber}`;
      } else if (phoneLength === 11) {
         const areaCode = validInput.slice(0, 3);
         const middlePart = validInput.slice(3, 7);
         const lineNumber = validInput.slice(7, 11);
         formattedNumber = `(${areaCode})${middlePart}-${lineNumber}`;
      } else if (phoneLength > 11) {
         const areaCode = validInput.slice(0, 3);
         const middlePart = validInput.slice(3, phoneLength - 4);
         const lineNumber = validInput.slice(phoneLength - 4, phoneLength);
         formattedNumber = `(${areaCode})${middlePart}-${lineNumber}`;
      } else {
         formattedNumber = validInput;
      }
      return formattedNumber;
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let request = {
            phone_number: phoneNumber.replace(/\D/g, ''),
            country_id: selectedCountry?.id && Number(selectedCountry?.id),
      }
      sendCountryNumber(request)
   }

   return {
      alert,
      isOpen,
      search,
      countries,
      selectedCountry,
      phoneNumber,
      handleSearch,
      handleCountrySelect,
      setIsOpen,
      formatPhoneNumberBasedOnLength,
      handlePhoneNumberChange,
      generatePhonePlaceholder,
      applyPhoneMask,
      handleSubmit
   }

}
export default CountryViewController;
