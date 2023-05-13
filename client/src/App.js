import "./App.css";
import Dashboard from "./Dashboard";
import Manufacturer from "./Components/Manufacturer";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Intermediate from "./Components/Intermediate";
import Customer from "./Components/Customer";
import Chain from "./Components/Chain";
import Header from "./Components/Header";
import Footer from "./Reusables/Footer";
import HomePage from "./Components/HomePage";
import Register from "./Components/Register";
import ManufcDB from "./Components/ManufDB";
import MiddlemenDB from "./Components/MiddlemenDB";
function App() {
  return (
    <>      <Header />
    <div className="App">
      {/* <Dashboard/> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/register" element={<Register />} />
        
        {/* <Route exact path='/' element={<Login/>}/> */}
        <Route exact path="/manufacturer" element={<Manufacturer />} />
        <Route exact path="/dashboard/manufacturer" element={<ManufcDB />} />
        <Route exact path="/dashboard/middlemen" element={<MiddlemenDB />} />        
        <Route exact path="/intermediate" element={<Intermediate />} />
        <Route exact path="/verify" element={<Customer />} />
        <Route exact path="/track" element={<Chain />} />
      </Routes>

    </div>
    <Footer/>
    </>

  );
}

export default App;
