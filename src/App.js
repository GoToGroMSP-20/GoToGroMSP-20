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
    dob: ""
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
      successMessage: "This worked yay!"
    },
    {
      id: 2,
      label: "Date Of Birth",
      name: "dob",
      type: "date",
      required: true,
      errorMessage: "This didn't work rip",
      successMessage: "This worked yay!"
    }
  ];

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
        </header><br/><br/>
        <body>
          {inputs.map((input) => (
            <InputField
              key={input.id}
              label={input.label}
              name={input.name}
              type={input.type}
              value={values[input.name]}
              placeHolder={input.placeHolder}
              required={input.required}
              onChange={onChange}
              errorMessage={input.errorMessage}
              successMessage={input.successMessage}
            />
          ))}
        </body>
    </div>
  );
}

export default App;
