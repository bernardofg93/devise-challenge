interface Props {
   type?: any,
   className?: string,
   title?: string,
   onClick?: () => any,
}

const CustomButton = ({
                         type,
                         className,
                         title,
                         onClick,
                      }: Props) => {
   return (
      <button
         type={type}
         className={className}
         onClick={onClick}
      >
         {title}
      </button>
   )
}
export default CustomButton;
