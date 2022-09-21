import React from "react";
import { Button } from "../Button/Button";
import { InputField } from "../InputField/InputField";
//import "./AddOrder.css";

export const AddOrder = () => {
  return (
    <div className="AddOrder">
      <h1 className="App-header">Add New Order</h1>
      <form>
        <InputField
          label={"Order ID"}
          placeholder={"A78D4S5S5"}
          id={"transaction_id"}
        />
        <InputField
          label={"Member ID"}
          id={"member_id"}
          type={"email"}
          placeholder={"alfie.santos@gmail.com"}
        />
        <Button buttonType={"primary"} isDisabled={true}>
          Add Order
        </Button>
      </form>
    </div>
  );
};
