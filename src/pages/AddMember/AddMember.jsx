import "./AddMember.css";
import { useState, useRef } from "react";
import { InputField } from "../../components/InputField/InputField";
import { Button } from "../../components/Button/Button";
import { Popup } from "../../components/Popup/Popup";
import { addMember } from "../../utils/API";
import { validateEmailFormat } from "../../utils/validation/emailFormat";
import { validateMobileFormat } from "../../utils/validation/mobileFormat";
import { useNavigate } from "react-router-dom";

export const AddMember = () => {
  const successPopupRef = useRef(null);
  const errorPopupRef = useRef(null);
  const [memberToAdd, setMemberToAdd] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    mobile: "",
  });

  const navigate = useNavigate();
  const changeRoute = (route) => {
    navigate(route);
  }

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setMemberToAdd(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };
  
  const handleOnSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on submit. User might encounter an error and want the inputs to still have data to edit and resubmit
    addMember(memberToAdd, successPopupRef, errorPopupRef);
  }

  return (
    <div className="addmember">
      <h1>Add New Member</h1>
      <h3>Personal Info</h3>
      <form onSubmit={handleOnSubmit}>
        <InputField onChange={handleOnChange} required value={memberToAdd.firstName} label={"First Name"} name={"firstName"}/>
        <InputField onChange={handleOnChange} required value={memberToAdd.lastName} label={"Last Name"} name={"lastName"}/>
        <InputField onChange={handleOnChange} required value={memberToAdd.dob} label={"Date of Birth"} type={"date"} name={"dob"}/>
        <InputField onChange={handleOnChange} required value={memberToAdd.email} label={"Email"} name={"email"} validationFunction={validateEmailFormat} errorMessage="Email not valid"/>
        <InputField onChange={handleOnChange} required value={memberToAdd.mobile} label={"Mobile Number (Optional)"} name={"mobile"} validationFunction={validateMobileFormat} errorMessage="Mobile number not valid"/>
        <Button buttonType={"primary"}>Add Member</Button>
      </form>
      <Popup ref={successPopupRef} popupType={"success"} dialogueText="Add member successful">
        <Button buttonType={"primary"} onClickFunction={() => changeRoute("/add-order")}>Add an Order</Button>
      </Popup>
      <Popup ref={errorPopupRef} popupType={"error"} dialogueText="Oops! Something broke from our end. Please contact our technicians for support (Error code: 500)">
        <Button buttonType={"primary"} onClickFunction={() => changeRoute("/add-order")}>Back to Add Order</Button>
      </Popup>
    </div>
  );
};
