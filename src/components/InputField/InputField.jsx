import { useState } from "react";
import "./InputField.css";

export const InputField = (props) => {
  const [focused, setFocused] = useState(false);
  const {label, errorMessage, successMessage, onChange, id, ...inputProps} = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="inputField">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange} 
        onBlur={handleFocus}
      /> 
      <span>{errorMessage}</span>
      <span>{successMessage}</span>
    </div>
  )
}

