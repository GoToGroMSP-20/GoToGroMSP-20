import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { InputField } from "./components/InputField/InputField";
import { AddOrder } from "./components/Pages/addOrder";

function alertBrowser() {
  alert("Function executed");
}

function App() {
  const [values, setValues] = useState({
    firstName: "",
    dob: "",
  });

  const inputs = [
    {
      id: 1,
      label: "First Name",
      name: "firstName",
      type: "text",
      placeHolder: "firstname",
      required: true,
      errorMessage: "This didn't work rip",
      successMessage: "This worked yay!",
    },
    {
      id: 2,
      label: "Date Of Birth",
      name: "dob",
      type: "date",
      required: true,
      errorMessage: "This didn't work rip",
      successMessage: "This worked yay!",
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <AddOrder />
    </div>
  );
}

export default App;
