import "./AddOrder.css";
import { useState, useRef } from "react";
import { InputField } from "../../components/InputField/InputField";
import { Button } from "../../components/Button/Button";
import { Popup } from "../../components/Popup/Popup";
import { addMember } from "../../utils/API";
import { validateEmailFormat } from "../../utils/validation/emailFormat";
import { validateMobileFormat } from "../../utils/validation/mobileFormat";
import { useNavigate } from "react-router-dom";

export const AddOrder = () => {
  const successPopupRef = useRef(null);
  const errorPopupRef = useRef(null);
  const [orderToAdd, setOrderToAdd] = useState({
    transaction_id: "",
    member_id: "",
  });

  const navigate = useNavigate();
  const changeRoute = (route) => {
    navigate(route);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setOrderToAdd((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on submit. User might encounter an error and want the inputs to still have data to edit and resubmit
    addMember(orderToAdd, successPopupRef, errorPopupRef);
  };
  return (
    <div className="addorder">
      <h1>Add New Order</h1>
      <form onSubmit={handleOnSubmit}>
        <InputField
          onChange={handleOnChange}
          required
          value={orderToAdd.transaction_id}
          label={"Order ID"}
          name={"transaction_id"}
        />
        <InputField
          onChange={handleOnChange}
          required
          value={orderToAdd.member_id}
          label={"Member ID"}
          name={"member_id"}
        />
      </form>
      <Popup
        ref={successPopupRef}
        popupType={"success"}
        dialogueText="Add order successful"
      >
        <Button
          buttonType={"primary"}
          onClickFunction={() => changeRoute("/add-order")}
        >
          Add an Order
        </Button>
      </Popup>
      <Popup
        ref={errorPopupRef}
        popupType={"error"}
        dialogueText="Oops! Something broke from our end. Please contact our technicians for support (Error code: 500)"
      >
        <Button
          buttonType={"primary"}
          onClickFunction={() => changeRoute("/add-order")}
        >
          Back to Add Order
        </Button>
      </Popup>
    </div>
  );
};
