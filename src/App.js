import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  function alertBrowser(){
    //alert("Naboo");
    console.log("Naboo");
  }
  return <Button buttonName={"Breach"}  onClickFunction={alertBrowser}/>;
}

export default App;
