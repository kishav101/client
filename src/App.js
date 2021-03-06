import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from './Home';
import Services from './Services';
import Applicant_Profile from "./Applicant_Profile";
import Login from './Login';
import Registration from './Registration';
import ForgetPassword from './ForgetPassword';
import Support from './ResquestSupport';
import AdminLogin from "./Components/Admininstration/AdminLogin";
import AdminDashboard from "./Components/Admininstration/AdminDashboard";
import {RecoilRoot} from "recoil";


function App() {
  return (
    <div className="App">
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Applicant_Profile" element={<Applicant_Profile/>} />
        <Route path="/Register" element={<Registration/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Logout" element={<Login/>} />
        <Route path="/ForgetPassword" element={<ForgetPassword/>} />
        <Route path="/Support" element={<Support/>} />
       <Route path="/Admin" element={<AdminLogin/>} />
       <Route path="/AdminDashboard" element={<RecoilRoot><AdminDashboard/></RecoilRoot>} />
   </Routes>
            

    </div>
  
  );
}
export default App;
