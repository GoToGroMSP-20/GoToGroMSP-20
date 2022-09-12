import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button/Button";
import Order from "./components/Form/Order_form";

function alertBrowser() {
  alert("Function executed");
  console.log("Function executed");
}

function App() {
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
        <Order buttonName={"Breach"} onClickFunction={alertBrowser} />
        <Button buttonType={"primary"} onClickFunction={alertBrowser}>
          This is primary button
        </Button>
        <Button buttonType={"secondary"} onClickFunction={alertBrowser}>
          This is secondary button
        </Button>
        <Button isDisabled onClickFunction={alertBrowser}>
          This is disabled button
        </Button>
      </header>
      <table>
        <td>
          <tr>Hi</tr>
        </td>
      </table>
    </div>
  );
}

export default App;
