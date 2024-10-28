import React from "react";

type AlertProps = {
   message: string;
   type: 'success' | 'error';
   onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {

   const alertStyle = {
      padding: '15px',
      borderRadius: '5px',
      margin: '10px 0',
      color: type === 'success' ? '#155724' : '#721c42',
      backgroundColor: type === 'success' ? '#d4edda' : '#f8d7da',
      border: type === 'success' ? '1px solid #c3e6cb' : '1px solid #f5c6cb',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
   }

   return (
      <div style={alertStyle}>
         <span>{message}</span>
      </div>
   );
}
export default Alert;
