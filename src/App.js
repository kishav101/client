import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

import Services from './Services';
import Join_Us from "./Join_Us";
import Login from './Login';
import Registration from './Registration';


import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
  
    

    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Join_us" element={<Join_Us />} />
      </Routes>
            

    </div>
  
  );
}

export default App;
