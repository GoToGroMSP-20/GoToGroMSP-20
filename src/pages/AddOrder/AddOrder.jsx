import React from "react";
import { Button } from "../../components/Button/Button";
import { InputField } from "../../components/InputField/InputField";
import "./AddOrder.css";

export const AddOrder = () => {
  return (
    <div className="addorder">
      <h1 className="white-text">Add New Order</h1>
      <form>
        <InputField
          label={"Order ID"}
          name={"transaction_id"}
        />
        <InputField
          label={"Member ID"}
          name={"member_id"}
        />
        <Button buttonType={"primary"} isDisabled={true}>
          Add Order
        </Button>
      </form>
    </div>
  );
};
