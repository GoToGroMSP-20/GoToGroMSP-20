import "./Popup.css";
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { AiFillExclamationCircle } from "react-icons/ai";

export const Popup = React.forwardRef(({popupType, dialogueText, children}, ref) => {
  const renderNotificationIcon = () => {
    switch (popupType) {
      case "success":
        return <FaCheckCircle size="7rem" color="var(--clr-primary)"/>;
      case "error":
        return <FaTimesCircle size="7rem" color="var(--clr-error)"/>;
      case "warning":
        return <AiFillExclamationCircle size="7rem" color="var(--clr-warning)"/>;
      default:
        break;
    }
  };
  
  return (
    <dialog ref={ref} className="popup">
      <div className="popup-status">
        {renderNotificationIcon()}
        <p>{dialogueText}</p>
        {children}
      </div>
    </dialog>
  );
});
