import React, { useEffect } from "react";

const Modal = ({ closeModal, modalContent }) => {
  
  useEffect(() => {
    
    setTimeout(() => {
      closeModal()
    }, 3000);
    
  }, [])
  
  return (
    <div className="Modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
