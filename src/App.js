import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddMember } from './pages/AddMember/AddMember';
import { AddOrder } from "./pages/AddOrder/AddOrder";
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router basename='/GoToGroMSP-20'>
        <NavBar/>
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
