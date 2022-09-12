import { useState } from "react";
import { validationStatus } from "../../utils/validationStatus";
import "./InputField.css";

export const InputField = (props) => {
  const [validationState, setValidationState] = useState(validationStatus.default);
  const {label, name, type, value, placeHolder, required, onChange, successMessage, errorMessage, validationFunction} = props;

  const handleOnBlur = (e) => {
    setValidationState(validationFunction(e.target.value));
  };

  return (
    <div className="inputField" validationState={validationState}>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeHolder}
        required={required}
        onChange={onChange} 
        onBlur={handleOnBlur}
      /> 
      <span>{validationState >= 0 ? successMessage : errorMessage}</span>
    </div>
  );
}

