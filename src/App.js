import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import { Button } from './components/Button/Button';
import { InputField } from './components/InputField/InputField';


function alertBrowser() {
  alert("Function executed");
}

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phoneNumber: ""
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      errorMessage: "This didn't work rip",
      successMessage: "This worked yay!",
      label: "First Name",
      pattern: "^[A-Za-z]$",
      required: true
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      errorMessage: "This didn't work rip",
      successMessage: "This worked yay!",
      label: "Last Name",
      pattern: "^[A-Za-z]$",
      required: true
    },
    {
      id: 3,
      name: "dob",
      type: "date",
      errorMessage: "This didn't work rip",
      successMessage: "This worked yay!",
      label: "Last Name",
      placeHolder: "dd / mm / yyyy",
      required: true
    },
    {
      id: 4,
      name: "email",
      type: "email",
      errorMessage: "This didn't work rip",
      successMessage: "This worked yay!",
      label: "Email",
      required: true
    },
    {
      id: 5,
      name: "mobileNumber",
      type: "text",
      errorMessage: "This didn't work rip",
      successMessage: "This worked yay!",
      label: "Mobile Number (Optional)",
      pattern: "^[0-9]{10}$"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className='Form'>
        <h3>Test Form</h3>
        {inputs.map((input) => (
          <InputField
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        </div>
        </header>
    </div>
  );
}

export default App;
