import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {
  function alertBrowser() {
    alert("this be alert")
  }
  function consoleLogBrowser() {
    console.log("this be log")
  }
  return(
    <div>
      <Button buttonName={"This is a button."} onClickFunction={alertBrowser}/>
      <Button buttonName={"different button."} onClickFunction={consoleLogBrowser}/>
    </div>
  );
};

export default App;
