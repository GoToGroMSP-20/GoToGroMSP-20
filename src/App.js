import './App.css';
import { AddMember } from './pages/AddMember/AddMember';
import { AddOrder } from "./pages/AddOrder/AddOrder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [values, setValues] = useState({
  //   firstName: "",
  //   dob: "",
  // });

  // const onChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  return (
    <div className="App">
      <Router basename='/GoToGroMSP-20'>
        <Routes>
          <Route path="/" element={<AddOrder/>} />
          <Route path="/add-order" element={<AddOrder/>} />
          <Route path="/add-member" element={<AddMember/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
