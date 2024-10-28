interface Props {
   data?: any
   className?: string;
}

const CustomSelect = ({className, data}: Props) => {
   return (
      <select
         className={className}
      >
         {/*{Object.values(data).map((country: any) => (*/}
         {/*   <option key={country.id} value={country?.calling_code}>*/}
         {/*      {country.calling_code}*/}
         {/*   </option>*/}
         {/*))}*/}
      </select>
   )
}
export default CustomSelect;
