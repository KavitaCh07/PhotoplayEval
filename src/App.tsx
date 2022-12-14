import React from 'react';
import './App.css';
import Home from './views/home/home';
import { Routes, Route, Link } from "react-router-dom";
import Pmodal from './components/pmodal/pmodal';
import Vmodal from './components/vmodal/vmodal';

function App() {
  return (
    <Routes>
    <Route path="/*" element={<Home/>}/>
    <Route path="/pmodal" element={<Pmodal />} />
    <Route path="/vmodal" element={<Vmodal />} />
    {/* <Link to={{pathname: "/pmodal", photoData: data}}></Link> */}
  </Routes>
  );
}

export default App;
