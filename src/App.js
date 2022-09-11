import logo from "./logo.svg";
import "./App.css";
import Order from "./components/Form/Order_form";

function App() {
  function alertBrowser(){
    //alert("Naboo");
    console.log("Naboo");
  }
  return <Order buttonName={"Breach"}  onClickFunction={alertBrowser}/>;
}

export default App;
