import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Customer from "./Components/Customer";
import Chain from "./Components/Chain";
import Header from "./Components/Header";
import Footer from "./Reusables/Footer";
import HomePage from "./Components/HomePage";
import Register from "./Components/Register";
import ManufcDB from "./Components/ManufDB";
import MiddlemenDB from "./Components/MiddlemenDB";
import AdminDB from "./Components/AdminDB";
import AddPRoduct from "./Components/AddProduct";
function App() {
  return (
    <>      <Header />
    <div className="App">
      {/* <Dashboard/> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/register" element={<Register />} />
        
        <Route exact path='/addproduct' element={<AddPRoduct/>}/>

        <Route exact path="/dashboard/manufacturer" element={<ManufcDB />} />
        <Route exact path="/dashboard/middlemen" element={<MiddlemenDB />} /> 
        <Route exact path="/dashboard/admin" element={<AdminDB />} /> 

        <Route exact path="/verify" element={<Customer />} />
        <Route exact path="/track" element={<Chain />} />

      </Routes>

    </div>
    <Footer/>
    </>

  );
}

export default App;
