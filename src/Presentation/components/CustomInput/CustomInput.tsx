
interface Props {
   className?: string;
   type?: string;
}

const CustomInput = ({className, type}: Props) => {
   return (
      <div className='custom-input'>
         <input
            type={type}
            className={className}
         />
      </div>
   )
}
export default CustomInput;
