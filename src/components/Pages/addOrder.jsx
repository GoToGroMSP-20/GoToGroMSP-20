import React from "react";
import { Button } from "../Button/Button";
import { InputField } from "../InputField/InputField";
//import "./AddOrder.css";

export const AddOrder = () => {
  return (
    <div className="AddOrder">
      <h1 className="App-header">Add New Order</h1>
      <form>
        <InputField label={"Order ID"} placeholder={"A78D4S5S5"} />
        <InputField
          label={"Member ID"}
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
